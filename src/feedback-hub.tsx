import {useLanguage} from './use-language';
import {LanguageSelect} from './language-select';
import {pageUrl,apiUrl,SITE_ORIGIN} from './urls';
import {useEffect,useState} from 'react';
import {ArrowUpRight,ArrowRight,Check,CheckCircle2,MessageCircle,Lightbulb,Bug,Heart,Globe,ChevronDown,Copy,ShieldCheck,ExternalLink,LoaderCircle} from 'lucide-react';

const ids=['bug','suggestion','question','experience'];const icons=[Bug,Lightbulb,MessageCircle,Heart];
export default function FeedbackHub(){
 const{lang,setLang,c}=useLanguage();const[category,setCategory]=useState('bug');const[busy,setBusy]=useState(false);const[error,setError]=useState<''|'error'|'rateError'|'copyError'|'networkError'>('');const[receipt,setReceipt]=useState<{id:string,key:string}|null>(null);const[copied,setCopied]=useState(false);const[privacy,setPrivacy]=useState(false);

 async function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();setBusy(true);setError('');const data=new FormData(e.currentTarget);
  try{const response=await fetch(apiUrl('/api/feedback'),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...Object.fromEntries(data),consent:data.get('consent')==='on',category,language:lang})});
   const result=await response.json() as {error?:string,id:string,key:string};
   if(!response.ok){setError(response.status===429?'rateError':'error');return;}
   if(!result.id||!result.key){setError('error');return;}setReceipt(result);try{localStorage.setItem('mero-last-ticket',JSON.stringify(result))}catch{}
  }catch(e){setError(e instanceof TypeError?'networkError':'error')}finally{setBusy(false)}
 }

 function tracking(){return `${location.origin}${pageUrl("track/")}#${receipt!.id}.${receipt!.key}`}
 return <div className="site"><header className="nav"><a href={pageUrl()} className="wordmark"><img className="mero-avatar" src={pageUrl("mero-avatar.png")} alt={c.artAlt}/><span>{c.brand}<span className="brand-sub">{c.brandSub}</span></span></a><div className="nav-right"><LanguageSelect lang={lang} onChange={setLang} label={c.languageLabel}/><a className="steam-link" href="https://store.steampowered.com/app/5054300/" target="_blank" rel="noreferrer">{c.nav}<ArrowUpRight size={15}/></a></div></header>
 <main><section className="intro"><span className="eyebrow"><i/>{c.label}</span><h1>{c.title.map((line,i)=><span key={line}>{i>0&&<br/>}{line}</span>)}</h1><p>{c.intro}</p><div className="intro-meta"><span><ShieldCheck size={15}/>{c.privateLabel}</span><span><MessageCircle size={15}/>{c.teamLabel}</span></div><div className="art"><img src={pageUrl("memory.jpg")} alt={c.artAlt}/><div className="art-caption"><span>{c.fragment}</span><p>{c.detail}</p></div></div><div className="studio-note"><p>{c.studioNote}<small>Mero Studio</small></p></div></section>
 <section className="form-section" id="feedback"><div className="form-top"><span className="section-number">01 /</span><span>{c.by}</span><span className="mini-dot"/></div>{receipt?<div className="success" aria-live="polite"><CheckCircle2 size={44}/><h2>{c.success}</h2><p>{c.successSub}</p><code>{receipt.id}</code><button className="submit" onClick={async()=>{try{await navigator.clipboard.writeText(tracking());setCopied(true)}catch{setError('copyError')}}}>{copied?<Check size={18}/>:<Copy size={18}/>} {copied?c.saved:c.save}</button><a className="text-link" href={`${pageUrl("track/")}#${receipt.id}.${receipt.key}`}>{c.open}<ArrowUpRight size={16}/></a><button className="text-link" onClick={()=>{setReceipt(null);setCopied(false)}}>{c.again}</button>{error&&<p role="alert">{c[error]}</p>}</div>:<><h2>{c.formTitle}</h2><p className="form-lead">{c.formSub}</p><form onSubmit={submit}>
 <fieldset><legend>{c.choose}</legend><div className="categories">{ids.map((id,i)=>{const Icon=icons[i];return <button key={id} type="button" aria-pressed={category===id} className={`category ${category===id?'selected':''}`} onClick={()=>setCategory(id)}><Icon size={20}/><span>{c.types[i]}<small>{c.typeSubs[i]}</small></span>{category===id&&<Check size={14} className="category-check"/>}</button>})}</div></fieldset>
 <label className="field">{c.subject}<em>*</em><input required minLength={3} maxLength={120} name="title" placeholder={c.subjectPh}/></label>
 <label className="field">{c.body}<em>*</em><textarea required minLength={10} maxLength={6000} rows={6} name="message" placeholder={c.bodyPh}/><span className="hint">{c.lengthHint}</span></label>
 <div className="field-row"><label className="field">{c.platform}<select name="platform"><option value="Windows">Windows</option><option value="macOS">macOS</option><option value="Steam Deck">Steam Deck</option><option value="Other">{c.other}</option></select></label><label className="field">{c.version}<input name="version" maxLength={80} placeholder={c.versionPh}/></label></div>
 <div className="field-row"><label className="field">{c.name}<input name="name" autoComplete="nickname" maxLength={60} placeholder={c.namePh}/></label><label className="field">{c.email}<input type="email" name="contact" autoComplete="email" maxLength={160} placeholder={c.emailPh}/></label></div>
 <div className="honeypot" aria-hidden="true"><label>Website<input name="website" autoComplete="off" tabIndex={-1}/></label></div><label className="consent"><input type="checkbox" name="consent" required/><span>{c.consent}</span></label><p className="private-note"><ShieldCheck size={14}/>{c.private}</p>{error&&<p className="error" role="alert">{c[error]}</p>}<button className="submit" disabled={busy}>{busy?<LoaderCircle className="spin" size={18}/>:<>{c.send}<ArrowRight size={18}/></>}{busy&&c.sending}</button><p className="time">{c.time}</p></form></>}
 <div className="faq"><h3>{c.faq}</h3>{c.faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={15}/></summary><p>{a}</p></details>)}</div></section></main>
 <footer><div><span className="footer-brand">{c.brand}</span><p>{c.footer}</p></div><div className="footer-links"><a href={pageUrl("track/")}>{c.ticket}</a><button onClick={()=>setPrivacy(!privacy)}>{c.privacy}</button><a href={`${SITE_ORIGIN}/admin`}>{c.admin}<ExternalLink size={12}/></a></div><small>© {new Date().getFullYear()} Mero Studio</small></footer>{privacy&&<div className="privacy-panel"><h3>{c.privacy}</h3><p>{c.privacyBody}</p><button onClick={()=>setPrivacy(false)}>{c.close}</button></div>}</div>
}
