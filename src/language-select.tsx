'use client';
import {Globe} from 'lucide-react';
import {languages,type Language} from './i18n';
export function LanguageSelect({lang,onChange,label}:{lang:Language;onChange:(value:Language)=>void;label:string}){return <label className="language-switch"><Globe size={15}/><select aria-label={label} value={lang} onChange={e=>onChange(e.target.value as Language)}>{languages.map(l=><option key={l.id} value={l.id}>{l.label}</option>)}</select></label>}
