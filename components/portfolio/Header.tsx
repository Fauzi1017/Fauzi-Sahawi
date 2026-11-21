'use client';
import { useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
export const navigation = ['Work','About','Expertise','Experience','Contact'];
export default function Header() {
 const [open,setOpen]=useState(false);const button=useRef<HTMLButtonElement>(null);
 return <header className="site-header"><div className="container header-inner"><a className="wordmark" href="/" aria-label="Fauzi, home">Fauzi<span>.</span></a><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(n=><a key={n} href={`/#${n.toLowerCase()}`}>{n}</a>)}</nav><a className="button header-cta" href="/#contact">Let’s Talk <ArrowUpRight size={17}/></a><button ref={button} className="menu-button" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div><nav id="mobile-navigation" className="mobile-nav" hidden={!open} aria-label="Mobile navigation" onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);button.current?.focus();}}}>{navigation.map(n=><a key={n} href={`/#${n.toLowerCase()}`} onClick={()=>setOpen(false)}>{n}</a>)}</nav></header>;
}
