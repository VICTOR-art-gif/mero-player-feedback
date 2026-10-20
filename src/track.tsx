'use client';
import {useEffect,useState} from 'react';
import {pageUrl,apiUrl} from './urls';
import {useLanguage} from './use-language';
import {LanguageSelect} from './language-select';
export default function Track(){
 const{lang,setLang,c}=useLanguage();
 const[data,setData]=useState<any>(null),[error,setError]=useState<'invalid'|'missing'|'network'|null>(null),[busy,setBusy]=useState(false),[link,setLink]=useState('');
 async function load(fragment:string){setBusy(true);setError(null);setData(null);try{
  const clean=fragment.includes('#')?fragment.split('#')[1]:fragment;const dot=clean.indexOf('.');
  if(dot<0){setError('invalid');return;}
  const id=clean.slice(0,dot),key=clean.slice(dot+1);
  const r=await fetch(apiUrl('/api/ticket?id='+encodeURIComponent(id)),{headers:{'x-ticket-key':key}});
  const d=await r.json();if(!r.ok){setError(r.status===404?'missing':'network');return;}setData(d);
 }catch{setError('network')}finally{setBusy(false)}}
 useEffect(()=>{if(location.hash)load(location.hash);else try{const last=JSON.parse(localStorage.getItem('mero-last-ticket')||'null');if(last)load(last.id+'.'+last.key)}catch{}},[]);
 const errorText=error==='invalid'?c.queryInvalid:error==='missing'?c.notFound:c.networkError;
 return <main className="utility-page"><nav><a href={pageUrl()}>← {c.return}</a><LanguageSelect lang={lang} onChange={setLang} label={c.languageLabel}/></nav><h1>{c.queryTitle}</h1><p>{c.queryPrivacy}</p><section className="utility-card"><label>{c.queryLabel}<input value={link} onChange={e=>setLink(e.target.value)} placeholder="https://…/track/#…" autoComplete="off"/></label><button onClick={()=>load(link)} disabled={busy}>{busy?c.loading:c.queryButton}</button></section>{error&&<p role="alert" className="utility-error">{errorText}</p>}{data&&<article className="utility-card"><span className="status">{c.states[data.status as keyof typeof c.states]||data.status}</span><p className="message-meta">{new Date(data.createdAt).toLocaleString(lang==='zh'?'zh-CN':lang)}</p><h2>{data.title}</h2><p>{data.message}</p><div className="reply"><strong>Mero Studio</strong><p>{data.reply||c.noReply}</p></div><p className="message-meta">{c.keepPrivate}</p></article>}</main>
}
