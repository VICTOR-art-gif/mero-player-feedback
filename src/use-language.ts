'use client';
import {useEffect,useState} from 'react';
import {copy,languages,browserLanguage,type Language} from './i18n';
export function useLanguage(){
 const [lang,setLang]=useState<Language>('zh');
 useEffect(()=>{let initial=browserLanguage(navigator.language);try{const saved=localStorage.getItem('mero-language');if(languages.some(l=>l.id===saved))initial=saved as Language;}catch{}setLang(initial);},[]);
 useEffect(()=>{document.documentElement.lang=languages.find(l=>l.id===lang)!.html;document.title=copy[lang].brand+' | '+copy[lang].brandSub;},[lang]);
 function choose(value:Language){setLang(value);try{localStorage.setItem('mero-language',value)}catch{}}
 return {lang,setLang:choose,c:copy[lang]};
}
