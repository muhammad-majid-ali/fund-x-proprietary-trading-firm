(function () {
      const h = React.createElement, F = React.Fragment, {useState} = React;
      const go = (id) => (e) => {e.preventDefault(); const el = document.getElementById(id); if (el) el.scrollIntoView({behavior: 'smooth'})};
      const L = (a) => h('ul', null, a.map((x, i) => h('li', {key: i}, x)));
      const Cols = (cols, cls) => h('div', {className: cls || 'three'}, cols.map((c, i) => h('div', {className: 'col ' + (c.t || ''), key: i}, h('h3', null, c.h), L(c.i))));
      const Sec = (id, title, body, alt, lead) => h('section', {id, className: alt ? 'alt' : ''}, h('div', {className: 'wrap'}, h('h2', null, title), lead ? h('p', {className: 'lead'}, lead) : null, body));

      function Candles() {
        let seed = 11; const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
        let p = 220; const out = [];
        for (let i = 0; i < 30; i++) {
          const o = p, c = Math.max(40, o - (r() - .38) * 34 - 3); p = c;
          const hi = Math.min(o, c) - r() * 16, lo = Math.max(o, c) + r() * 16, up = c < o, x = 16 + i * 26, col = up ? 'var(--bull)' : 'var(--bear)';
          out.push(h('g', {key: i, className: 'c', style: {animationDelay: (i * 40) + 'ms'}},
            h('line', {x1: x + 8, x2: x + 8, y1: hi, y2: lo, stroke: col, strokeWidth: 2}),
            h('rect', {x, y: Math.min(o, c), width: 16, height: Math.max(4, Math.abs(o - c)), fill: col})));
        }
        return h('svg', {viewBox: '0 0 800 260', 'aria-hidden': 'true'}, out);
      }

      function Tabbed({tabs}) {
        const [t, setT] = useState(0);
        return h(F, null,
          h('div', {className: 'tabs', role: 'tablist'}, tabs.map((x, i) => h('button', {key: i, className: 'tab', role: 'tab', 'aria-selected': t === i, onClick: () => setT(i)}, x.n))),
          tabs[t].v());
      }

      function Faq() {
        const [o, setO] = useState(0);
        const q = [
          ['What account sizes are available?', 'Funded trading accounts range from $5,000 to $100,000.'],
          ['Which platforms can I trade on?', 'MetaTrader 5, MatchTrader and cTrader.'],
          ['How often can I get rewarded?', 'You choose your reward cycle: weekly, bi-weekly, monthly or on-demand.'],
          ['Can I use signal bots or copy trading?', 'No. Signal bots, copy trading and account sharing are prohibited. Trading is manual and responsible only.'],
          ['What happens if my account is inactive?', 'Accounts inactive for 30 days are suspended, so funded accounts stay in efficient use and fair for everyone.'],
          ['Why was my IP address flagged?', 'Fund X monitors IP addresses for security. Unusual IP changes may trigger a review.']];
        return h('div', {className: 'faq'}, q.map((x, i) => h('div', {className: 'q', key: i},
          h('button', {onClick: () => setO(o === i ? -1 : i), 'aria-expanded': o === i}, h('span', null, x[0]), h('span', {'aria-hidden': 'true'}, o === i ? '–' : '+')),
          o === i ? h('div', {className: 'a'}, x[1]) : null)));
      }

      function App() {
        const nav = [['about', 'About'], ['how', 'How it works'], ['rules', 'Rules'], ['team', 'Team'], ['insights', 'Insights'], ['faq', 'FAQ']];
        return h(F, null,
          h('header', null, h('div', {className: 'wrap'},
            h('a', {className: 'brand', href: '#top', onClick: go('top'), style: {textDecoration: 'none'}}, 'Fund X'),
            h('nav', null, nav.map(n => h('a', {key: n[0], href: '#' + n[0], onClick: go(n[0])}, n[1]))),
            h('a', {className: 'btn', href: '#start', onClick: go('start')}, 'Get funded'))),
          h('main', {id: 'top'},
            h('div', {className: 'hero'}, h(Candles), h('div', {className: 'wrap'},
              h('h1', null, 'Trade our capital. Prove your discipline.'),
              h('p', {className: 'lead'}, 'Fund X funds disciplined traders with accounts from $5,000 to $100,000. No personal capital at risk.'),
              h('div', {className: 'acts'}, h('a', {className: 'btn', href: '#start', onClick: go('start')}, 'Start the challenge'), h('a', {className: 'btn ghost', href: '#how', onClick: go('how')}, 'See how it works')))),

            Sec('about', 'A prop firm built on trust', h(F, null,
              h('div', {className: 'two'},
                h('div', null, h('p', {className: 'lead'}, 'A proprietary trading firm provides traders with capital to trade financial markets. Traders share a percentage of the profits instead of using personal funds.'),
                  h('p', null, 'Fund X is designed to be a modern, transparent and trader-friendly firm: it identifies disciplined, skilled traders and backs them with professional tools, clear risk rules and a fair environment.')),
                h('div', null, Cols([{h: 'Vision', t: 'good', i: ['A globally trusted prop firm known for integrity, transparency and consistently profitable traders.']}, {h: 'Mission', t: 'mid', i: ['Empower disciplined traders with capital, structured risk management and a fair environment that promotes long-term consistency.']}], '')))), false),

            Sec('why', 'Why traders choose Fund X', h(F, null,
              h('div', {className: 'list2'}, ['Transparent rules and policies', 'Zero reward denial system', 'Professional trading environment', 'Step-by-step trader support', 'Focus on long-term growth and trust'].map((x, i) => h('li', {key: i, style: {listStyle: 'none'}}, x))),
              h('div', {style: {marginTop: 28}}, h('p', {className: 'lead'}, 'We believe discipline and consistency are the foundation of long-term trading. Grow steadily instead of rushing for quick profits.'))), true, 'Built for traders who want to grow without risking personal capital.'),

            Sec('how', 'From challenge to funded account', h(F, null,
              h('div', {className: 'stat'}, '$5,000 – $100,000'),
              h('div', {className: 'steps'}, [['Choose', 'Select an account size'], ['Beginner', 'Complete the trading challenge'], ['Intermediate', 'Keep proving consistency'], ['Master', 'Receive your funded account'], ['Share', 'Profits are split between you and Fund X']].map((s, i) => h('div', {className: 'step', key: i}, h('b', null, s[0]), h('span', null, s[1])))),
              h('div', {style: {marginTop: 36}}, h('h3', null, 'What we look for'), ['Risk management', 'Emotional control', 'Discipline', 'Consistency'].map(x => h('span', {className: 'tag', key: x}, x)),
                h('p', {style: {marginTop: 10}}, 'Performance is monitored under predefined rules. Drawdown limits and risk parameters are strictly enforced. Successful traders are onboarded with full platform access and rule orientation.'))), false),

            Sec('platforms', 'Platforms and payouts', Cols([
              {h: 'Trading platforms', t: 'good', i: ['MetaTrader 5', 'MatchTrader', 'cTrader', 'Stable, fast and user-friendly, so you focus on execution.']},
              {h: 'Flexible reward cycle', t: 'mid', i: ['Weekly', 'Bi-weekly', 'Monthly', 'On-demand']}], 'two'), true),

            Sec('rules', 'Rules that keep it fair', h(Tabbed, {
              tabs: [
                {n: 'IP address policy', v: () => L(['IP monitoring for security', 'Prevents unauthorized access', 'Unusual IP changes may trigger review'])},
                {n: 'Bots and copy trading', v: () => L(['Signal bots and copy trading are prohibited', 'Account sharing is strictly forbidden', 'Manual and responsible trading only'])},
                {n: 'Inactivity', v: () => L(['Accounts inactive for 30 days are suspended', 'Ensures funded accounts are used efficiently', 'Maintains fairness among traders'])}]
            }), false),

            Sec('team', 'The team', h(F, null, h('div', {className: 'team'}, [['Abdullah Asif', 'Founder & CEO'], ['Khawaja M. Rajab', 'Support Analyst'], ['M. Majid Ali', 'Finance Manager'], ['Abdullah Jamil', 'Media Manager'], ['M. Sufyan Azhar', 'Trend Analyst']].map((p, i) => h('div', {className: 'person' + (i ? '' : ' ceo'), key: i}, h('b', null, p[0]), h('span', null, p[1])))),
              h('p', {style: {marginTop: 28, color: 'var(--mute)'}}, 'Together the team covers operations, finance, trader support, media and market analysis.')), true),

            Sec('growth', 'How we grow', Cols([
              {h: 'Social media', i: ['Instagram and TikTok: short-form content', 'Twitter: market insights', 'YouTube: education and trust', 'Discord and Telegram: community']},
              {h: 'Influencers and affiliates', t: 'mid', i: ['Small to mid-level traders', 'Custom discount codes', 'Referral commissions and free challenges', 'Performance tracking via referral links']},
              {h: 'Free education', t: 'good', i: ['Trading plan PDFs', 'Risk management tools', 'Market outlooks', 'Email list for long-term engagement']}]), false),

            Sec('insights', 'Business insights', h(Tabbed, {
              tabs: [
                {n: 'SWOT', v: () => Cols([{h: 'Strengths', t: 'good', i: ['Uses own capital', 'Fast execution', 'Skilled traders', 'Advanced trading technology', 'Profits in rising and falling markets']}, {h: 'Weaknesses', t: 'bad', i: ['High financial risk', 'Market dependency', 'Inconsistent profits', 'Limited long-term client base']}, {h: 'Opportunities', t: 'mid', i: ['Market volatility', 'AI and algorithmic trading', 'New asset classes', 'Global expansion']}, {h: 'Threats', t: 'bad', i: ['Market crashes', 'Regulatory changes', 'Strong competition', 'Cybersecurity risks', 'Liquidity issues']}])},
                {n: 'PEST', v: () => Cols([{h: 'Political', i: ['Trading regulations', 'Government policies', 'Sanctions and trade laws']}, {h: 'Economic', t: 'mid', i: ['Interest rates', 'Inflation', 'Market volatility', 'Currency movements']}, {h: 'Social', t: 'good', i: ['Investor psychology', 'Talent availability', 'Remote trading culture']}, {h: 'Technological', i: ['High-speed platforms', 'AI trading systems', 'Data analytics', 'Cybersecurity']}])},
                {n: 'Why it works', v: () => L(['High demand from traders with limited capital', 'Scalable online structure with low operating costs', 'Multiple revenue streams: challenge fees, profit splits, services', 'Controlled risk through strict trading rules', 'Win–win model for traders and the firm', 'Rapid growth of the global online trading industry'])}]
            }), true),

            Sec('faq', 'Questions traders ask', h(Faq), false),

            h('section', {id: 'start', className: 'cta'}, h('div', {className: 'wrap'},
              h('h2', null, 'Ready to trade with our capital?'),
              h('p', {className: 'lead', style: {color: 'inherit'}}, 'Traders who show discipline, consistency and control are rewarded with funded accounts and long-term opportunities.'),
              h('a', {className: 'btn', href: '#top', onClick: go('top')}, 'Back to top')))),
          h('footer', null, h('div', {className: 'wrap'}, h('span', null, '© 2026 Fund X. All rights reserved.'), h('span', null, 'Trading involves risk.'))));
      }
      ReactDOM.createRoot(document.getElementById('root')).render(h(App));
    })();