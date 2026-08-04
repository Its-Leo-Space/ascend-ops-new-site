/* @ds-bundle: {"format":4,"namespace":"AscendAIDesignSystem_902814","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"EyebrowLabel","sourcePath":"components/core/EyebrowLabel.jsx"},{"name":"StatusIndicator","sourcePath":"components/core/StatusIndicator.jsx"},{"name":"ClosingCTA","sourcePath":"components/marketing/ClosingCTA.jsx"},{"name":"IntegrationIconRow","sourcePath":"components/marketing/IntegrationIconRow.jsx"},{"name":"LogoRow","sourcePath":"components/marketing/LogoRow.jsx"},{"name":"OverlayCard","sourcePath":"components/marketing/OverlayCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"},{"name":"TwoPanelSection","sourcePath":"components/marketing/TwoPanelSection.jsx"},{"name":"BarChartCard","sourcePath":"components/mockups/BarChartCard.jsx"},{"name":"TerminalCard","sourcePath":"components/mockups/TerminalCard.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"},{"name":"Hero","sourcePath":"ui_kits/marketing-site/Hero.jsx"},{"name":"HeroPattern","sourcePath":"ui_kits/marketing-site/HeroPattern.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"5cb730dfaa9c","components/core/Button.jsx":"6685725a855d","components/core/Card.jsx":"907b0a7d195a","components/core/EyebrowLabel.jsx":"1d9cbc76c71f","components/core/StatusIndicator.jsx":"8fb343becc52","components/marketing/ClosingCTA.jsx":"6474afd696a1","components/marketing/IntegrationIconRow.jsx":"38d334865c60","components/marketing/LogoRow.jsx":"a1b78cd86a87","components/marketing/OverlayCard.jsx":"0ab8764581cc","components/marketing/TestimonialCard.jsx":"9bec2438f0a4","components/marketing/TwoPanelSection.jsx":"d4eaf78b4c21","components/mockups/BarChartCard.jsx":"e7ff21772e1f","components/mockups/TerminalCard.jsx":"3f1fb904b95d","components/navigation/Footer.jsx":"8f0f4fe6b7d8","components/navigation/Nav.jsx":"6af6413e916c","ui_kits/marketing-site/Hero.jsx":"2b3aa240f1c8","ui_kits/marketing-site/HeroPattern.jsx":"a1810574eaf7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AscendAIDesignSystem_902814 = window.AscendAIDesignSystem_902814 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children = 'NEW',
  tone = 'accent'
}) {
  const styles = {
    accent: {
      background: 'var(--accent)',
      color: 'var(--accent-ink)'
    },
    dark: {
      background: 'var(--near-black)',
      color: 'var(--white)',
      border: '1px solid var(--gray-3)'
    },
    light: {
      background: 'var(--off-white)',
      color: 'var(--gray-1)',
      border: '1px solid var(--border-light)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.7rem',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-mono)',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      ...styles[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  tone = 'light',
  size = 'md',
  icon,
  href,
  onClick,
  style,
  ...rest
}) {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const onDark = tone === 'dark';
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: size === 'sm' ? '0.9375rem' : '1rem',
    letterSpacing: 'var(--tracking-normal)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    border: 'none',
    textDecoration: 'none',
    transition: 'opacity 0.15s ease, background 0.15s ease'
  };
  let variantStyle = {};
  if (isPrimary) {
    variantStyle = {
      background: onDark ? 'var(--btn-primary-bg-on-dark)' : 'var(--btn-primary-bg)',
      color: onDark ? 'var(--btn-primary-fg-on-dark)' : 'var(--btn-primary-fg)',
      borderRadius: 'var(--radius-pill)',
      padding: size === 'sm' ? '10px 20px' : '14px 28px'
    };
  } else if (isSecondary) {
    variantStyle = {
      background: 'transparent',
      color: onDark ? 'var(--text-heading-dark)' : 'var(--text-heading-light)',
      padding: '0',
      borderBottom: '1px solid currentColor',
      borderRadius: 0
    };
  }
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href,
    onClick,
    style: {
      ...base,
      ...variantStyle,
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = '0.8';
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = '1';
    },
    ...rest
  }, children, icon ? React.createElement('img', {
    key: 'icon',
    src: `https://unpkg.com/lucide-static@0.469.0/icons/${icon}.svg`,
    alt: '',
    style: {
      width: 16,
      height: 16,
      filter: isPrimary ? onDark ? 'none' : 'invert(1)' : 'none',
      opacity: isPrimary ? onDark ? 1 : 1 : 0.7
    }
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = 'lg',
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card-light)',
      border: '1px solid var(--border-on-light)',
      borderRadius: 'var(--radius-lg)',
      padding: padding === 'lg' ? '32px' : '20px',
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/EyebrowLabel.jsx
try { (() => {
function EyebrowLabel({
  tags = [],
  tone = 'light'
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.8rem',
      letterSpacing: 'var(--tracking-mono)',
      color: tone === 'dark' ? 'var(--text-muted-dark)' : 'var(--text-muted-light)'
    }
  }, tags.map((t, i) => React.createElement('span', {
    key: i
  }, `/${t}`)));
}
Object.assign(__ds_scope, { EyebrowLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EyebrowLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusIndicator.jsx
try { (() => {
function StatusIndicator({
  label = 'All systems operational',
  tone = 'dark'
}) {
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.8rem',
      color: tone === 'dark' ? 'var(--text-muted-dark)' : 'var(--text-muted-light)'
    }
  }, [React.createElement('span', {
    key: 'dot',
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--code-green)',
      boxShadow: '0 0 0 3px rgba(63,185,80,0.18)',
      flexShrink: 0
    }
  }), label]);
}
Object.assign(__ds_scope, { StatusIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusIndicator.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ClosingCTA.jsx
try { (() => {
function ClosingCTA({
  title,
  primaryLabel = 'Get Started',
  secondaryLabel = 'Talk to Us',
  tone = 'dark'
}) {
  const dark = tone === 'dark';
  return React.createElement('section', {
    style: {
      background: dark ? 'var(--black)' : 'var(--white)',
      padding: '96px 48px',
      textAlign: 'center'
    }
  }, [React.createElement('div', {
    key: 'glyph',
    style: {
      width: 56,
      height: 56,
      margin: '0 auto 32px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${dark ? 'var(--gray-3)' : 'var(--border-light)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('div', {
    style: {
      width: 20,
      height: 20,
      border: `2px solid ${dark ? 'var(--white)' : 'var(--black)'}`,
      borderRadius: '4px'
    }
  })), React.createElement('h2', {
    key: 'title',
    style: {
      font: 'var(--text-h2)',
      letterSpacing: 'var(--tracking-tight)',
      maxWidth: 700,
      margin: '0 auto 36px',
      color: dark ? 'var(--text-heading-dark)' : 'var(--text-heading-light)'
    }
  }, title), React.createElement('div', {
    key: 'ctas',
    style: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, [React.createElement('button', {
    key: 'p',
    style: {
      background: dark ? 'var(--white)' : 'var(--black)',
      color: dark ? 'var(--black)' : 'var(--white)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '14px 28px',
      fontWeight: 600,
      fontSize: '1rem',
      cursor: 'pointer'
    }
  }, primaryLabel), React.createElement('span', {
    key: 's',
    style: {
      color: dark ? 'var(--text-heading-dark)' : 'var(--text-heading-light)',
      fontWeight: 600,
      borderBottom: '1px solid currentColor',
      cursor: 'pointer'
    }
  }, secondaryLabel)])]);
}
Object.assign(__ds_scope, { ClosingCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ClosingCTA.jsx", error: String((e && e.message) || e) }); }

// components/marketing/IntegrationIconRow.jsx
try { (() => {
function IntegrationIconRow({
  items = []
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '28px',
      flexWrap: 'wrap',
      padding: '16px 0'
    }
  }, items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--off-white)',
      border: '1px solid var(--border-light)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '1rem',
      color: 'var(--gray-1)'
    }
  }, it.slice(0, 2).toUpperCase()))));
}
Object.assign(__ds_scope, { IntegrationIconRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/IntegrationIconRow.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoRow.jsx
try { (() => {
function LogoRow({
  names = []
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '32px',
      flexWrap: 'wrap',
      padding: '32px 0'
    }
  }, names.map((n, i) => React.createElement('span', {
    key: i,
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '1.1rem',
      color: 'var(--gray-2)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, n)));
}
Object.assign(__ds_scope, { LogoRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoRow.jsx", error: String((e && e.message) || e) }); }

// components/marketing/OverlayCard.jsx
try { (() => {
function OverlayCard({
  headline,
  tag,
  style
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-overlay-card)',
      padding: '28px 32px',
      maxWidth: 380,
      ...style
    }
  }, [React.createElement('span', {
    key: 'tag',
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.72rem',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--gray-1)',
      background: 'var(--off-white)',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px',
      marginBottom: '14px'
    }
  }, tag), React.createElement('div', {
    key: 'headline',
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '1.15rem',
      lineHeight: 1.3,
      color: 'var(--black)'
    }
  }, headline)]);
}
Object.assign(__ds_scope, { OverlayCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/OverlayCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  name,
  handle,
  avatarInitial
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, [React.createElement('p', {
    key: 'q',
    style: {
      font: 'var(--text-body)',
      color: 'var(--gray-1)',
      margin: 0
    }
  }, `"${quote}"`), React.createElement('div', {
    key: 'who',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, [React.createElement('div', {
    key: 'avatar',
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--off-white)',
      border: '1px solid var(--border-light)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '0.85rem',
      color: 'var(--gray-1)'
    }
  }, avatarInitial), React.createElement('div', {
    key: 'text'
  }, [React.createElement('div', {
    key: 'n',
    style: {
      fontWeight: 600,
      fontSize: '0.9rem',
      color: 'var(--black)'
    }
  }, name), React.createElement('div', {
    key: 'h',
    style: {
      fontSize: '0.8rem',
      color: 'var(--gray-2)'
    }
  }, handle)])])]);
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TwoPanelSection.jsx
try { (() => {
function TwoPanelSection({
  eyebrow = [],
  title,
  subcopy,
  features = [],
  cta,
  mockup,
  tone = 'dark'
}) {
  const dark = tone === 'dark';
  return React.createElement('section', {
    style: {
      background: dark ? 'var(--black)' : 'var(--white)',
      padding: 'var(--section-pad-y) 48px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, [React.createElement('div', {
    key: 'head',
    style: {
      marginBottom: '48px',
      maxWidth: 640
    }
  }, [React.createElement('div', {
    key: 'eb',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.8rem',
      display: 'flex',
      gap: '10px',
      color: dark ? 'var(--text-muted-dark)' : 'var(--text-muted-light)',
      marginBottom: '20px'
    }
  }, eyebrow.map((t, i) => React.createElement('span', {
    key: i
  }, `/${t}`))), React.createElement('h2', {
    key: 'h',
    style: {
      font: 'var(--text-h2)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 16px',
      color: dark ? 'var(--text-heading-dark)' : 'var(--text-heading-light)'
    }
  }, title), subcopy ? React.createElement('p', {
    key: 'sc',
    style: {
      font: 'var(--text-body-lg)',
      color: dark ? 'var(--text-body-dark)' : 'var(--text-body-light)',
      margin: 0
    }
  }, subcopy) : null]), React.createElement('div', {
    key: 'panels',
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: '48px',
      alignItems: 'center'
    }
  }, [React.createElement('div', {
    key: 'left'
  }, [React.createElement('div', {
    key: 'list',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '28px',
      marginBottom: '32px'
    }
  }, features.map((f, i) => React.createElement('div', {
    key: i
  }, [React.createElement('div', {
    key: 't',
    style: {
      font: 'var(--text-h4)',
      color: dark ? 'var(--text-heading-dark)' : 'var(--text-heading-light)',
      marginBottom: '8px'
    }
  }, f.title), React.createElement('div', {
    key: 'd',
    style: {
      font: 'var(--text-body)',
      color: dark ? 'var(--text-body-dark)' : 'var(--text-body-light)'
    }
  }, f.description)]))), cta ? React.cloneElement(cta, {
    key: 'cta'
  }) : null]), React.createElement('div', {
    key: 'right'
  }, mockup)])]));
}
Object.assign(__ds_scope, { TwoPanelSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TwoPanelSection.jsx", error: String((e && e.message) || e) }); }

// components/mockups/BarChartCard.jsx
try { (() => {
function BarChartCard({
  title = 'Response time',
  bars = [],
  style
}) {
  const max = Math.max(...bars.map(b => b.value), 1);
  return React.createElement('div', {
    style: {
      background: 'var(--code-bg)',
      border: '1px solid var(--code-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '24px',
      ...style
    }
  }, [React.createElement('div', {
    key: 'title',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.8rem',
      color: 'var(--text-muted-dark)',
      marginBottom: '20px'
    }
  }, title), React.createElement('div', {
    key: 'chart',
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '10px',
      height: '140px'
    }
  }, bars.map((b, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      flex: 1
    }
  }, [React.createElement('div', {
    key: 'bar',
    style: {
      width: '100%',
      height: `${b.value / max * 100}%`,
      background: b.anomaly ? 'var(--code-red)' : 'var(--code-green)',
      borderRadius: '4px 4px 0 0',
      opacity: 0.9
    }
  }), React.createElement('span', {
    key: 'label',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.65rem',
      color: 'var(--text-muted-dark)'
    }
  }, b.label)])))]);
}
Object.assign(__ds_scope, { BarChartCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/mockups/BarChartCard.jsx", error: String((e && e.message) || e) }); }

// components/mockups/TerminalCard.jsx
try { (() => {
const lineColor = {
  default: 'var(--code-text)',
  success: 'var(--code-green)',
  error: 'var(--code-red)',
  keyword: 'var(--code-blue)',
  value: 'var(--code-purple)'
};
function TerminalCard({
  title = 'ascend / sync-log',
  lines = [],
  style
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--code-bg)',
      border: '1px solid var(--code-border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      fontFamily: 'var(--font-mono)',
      ...style
    }
  }, [React.createElement('div', {
    key: 'bar',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 16px',
      borderBottom: '1px solid var(--code-border)'
    }
  }, [React.createElement('div', {
    key: 'dots',
    style: {
      display: 'flex',
      gap: '6px'
    }
  }, ['#F85149', '#F5A623', '#3FB950'].map((c, i) => React.createElement('span', {
    key: i,
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: c,
      opacity: 0.85
    }
  }))), React.createElement('span', {
    key: 'title',
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted-dark)',
      marginLeft: '4px'
    }
  }, title)]), React.createElement('div', {
    key: 'body',
    style: {
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontSize: '0.85rem',
      lineHeight: 1.7
    }
  }, lines.map((l, i) => React.createElement('div', {
    key: i,
    style: {
      color: lineColor[l.type] || lineColor.default,
      whiteSpace: 'pre-wrap'
    }
  }, l.text)))]);
}
Object.assign(__ds_scope, { TerminalCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/mockups/TerminalCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const columns = {
  Product: ['Overview', 'Solutions', 'Pricing'],
  Company: ['About', 'Process', 'Work With Us'],
  Resources: ['Blog', 'Docs', 'Status'],
  Legal: ['Privacy', 'Terms']
};
function Footer({
  logoText = 'Ascend Ops',
  statusLabel = 'All systems operational'
}) {
  return React.createElement('footer', {
    style: {
      background: 'var(--black)',
      color: 'var(--text-body-dark)',
      padding: '64px 48px 32px',
      fontFamily: 'var(--font-body)'
    }
  }, [React.createElement('div', {
    key: 'top',
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '48px',
      flexWrap: 'wrap',
      paddingBottom: '48px'
    }
  }, [React.createElement('div', {
    key: 'left',
    style: {
      maxWidth: 320
    }
  }, [React.createElement('div', {
    key: 'logo',
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '1.25rem',
      color: 'var(--white)',
      marginBottom: '16px'
    }
  }, logoText), React.createElement('div', {
    key: 'sub',
    style: {
      fontSize: '0.9rem',
      color: 'var(--text-muted-dark)',
      marginBottom: '16px'
    }
  }, 'Get infrastructure updates in your inbox.'), React.createElement('div', {
    key: 'form',
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, [React.createElement('input', {
    key: 'email',
    placeholder: 'you@company.com',
    style: {
      background: 'var(--near-black)',
      border: '1px solid var(--gray-3)',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 16px',
      color: 'var(--white)',
      fontSize: '0.85rem',
      flex: 1
    }
  }), React.createElement('button', {
    key: 'sub-btn',
    style: {
      background: 'var(--white)',
      color: 'var(--black)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 18px',
      fontWeight: 600,
      fontSize: '0.85rem',
      cursor: 'pointer'
    }
  }, 'Subscribe')])]), React.createElement('div', {
    key: 'cols',
    style: {
      display: 'flex',
      gap: '48px',
      flexWrap: 'wrap'
    }
  }, Object.entries(columns).map(([title, items]) => React.createElement('div', {
    key: title
  }, [React.createElement('div', {
    key: 't',
    style: {
      fontSize: '0.8rem',
      fontWeight: 600,
      color: 'var(--white)',
      marginBottom: '14px'
    }
  }, title), ...items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted-dark)',
      marginBottom: '10px',
      cursor: 'pointer'
    }
  }, it))])))]), React.createElement('div', {
    key: 'bottom',
    style: {
      borderTop: '1px solid var(--gray-3)',
      paddingTop: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
      fontSize: '0.8rem',
      color: 'var(--text-muted-dark)'
    }
  }, [React.createElement('span', {
    key: 'copy'
  }, `© ${new Date().getFullYear()} ${logoText}. All rights reserved.`), React.createElement('div', {
    key: 'status',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-mono)'
    }
  }, [React.createElement('span', {
    key: 'dot',
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--code-green)',
      boxShadow: '0 0 0 3px rgba(63,185,80,0.18)'
    }
  }), statusLabel])])]);
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
function Nav({
  logoText = 'Ascend Ops',
  links = ['Product', 'Solutions', 'Company'],
  onLoginClick,
  onSignUpClick
}) {
  return React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 48px',
      fontFamily: 'var(--font-body)'
    }
  }, [React.createElement('div', {
    key: 'logo',
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '1.15rem',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, logoText), React.createElement('div', {
    key: 'links',
    style: {
      display: 'flex',
      gap: '32px',
      alignItems: 'center'
    }
  }, links.map((l, i) => React.createElement('span', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '0.95rem',
      color: 'var(--gray-1)',
      cursor: 'pointer'
    }
  }, [l, React.createElement('img', {
    key: 'c',
    src: 'https://unpkg.com/lucide-static@0.469.0/icons/chevron-down.svg',
    alt: '',
    style: {
      width: 14,
      height: 14,
      opacity: 0.6
    }
  })]))), React.createElement('div', {
    key: 'actions',
    style: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center'
    }
  }, [React.createElement('span', {
    key: 'login',
    onClick: onLoginClick,
    style: {
      fontSize: '0.95rem',
      color: 'var(--gray-1)',
      cursor: 'pointer'
    }
  }, 'Log in'), React.createElement('button', {
    key: 'signup',
    onClick: onSignUpClick,
    style: {
      background: 'var(--black)',
      color: 'var(--white)',
      border: 'none',
      padding: '10px 22px',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 600,
      fontSize: '0.9rem',
      cursor: 'pointer'
    }
  }, 'Sign Up')])]);
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
function Hero({
  Button,
  EyebrowLabel,
  OverlayCard,
  HeroPattern
}) {
  return React.createElement('section', {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '140px 48px 180px',
      background: 'var(--white)'
    }
  }, [React.createElement(HeroPattern, {
    key: 'pattern',
    style: {
      left: 0,
      top: 0,
      opacity: 0.9
    }
  }), React.createElement('div', {
    key: 'content',
    style: {
      maxWidth: 720,
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative'
    }
  }, [React.createElement(EyebrowLabel, {
    key: 'eb',
    tags: ['audit', 'build', 'scale']
  }), React.createElement('h1', {
    key: 'h1',
    style: {
      font: 'var(--text-h1)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--black)',
      margin: '20px 0 24px'
    }
  }, 'The infrastructure layer for D2C brands'), React.createElement('p', {
    key: 'sub',
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--gray-1)',
      margin: '0 auto 36px',
      maxWidth: 560
    }
  }, 'Automated ops that catch decay before it costs you — one clean system across every channel.'), React.createElement('div', {
    key: 'ctas',
    style: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      marginBottom: '56px'
    }
  }, [React.createElement(Button, {
    key: 'p',
    variant: 'primary',
    icon: 'arrow-right'
  }, 'Get Started'), React.createElement(Button, {
    key: 's',
    variant: 'secondary'
  }, 'See How It Works')]), React.createElement('div', {
    key: 'overlay',
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, React.createElement(OverlayCard, {
    tag: '/ops-platform',
    headline: 'Optimize the Lifecycle of Customer Ops'
  }))])]);
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/HeroPattern.jsx
try { (() => {
// Neutral stand-in for the brief's signature commissioned illustration —
// a plain abstract node/line pattern, not final artwork. See readme.md "Assets — gaps to flag".
function HeroPattern({
  style
}) {
  const nodes = [[40, 60], [140, 40], [90, 160], [180, 200], [60, 280], [160, 340], [40, 420]];
  return React.createElement('svg', {
    width: 220,
    height: 480,
    viewBox: '0 0 220 480',
    style: {
      position: 'absolute',
      ...style
    }
  }, [React.createElement('polyline', {
    key: 'line',
    points: nodes.map(p => p.join(',')).join(' '),
    fill: 'none',
    stroke: 'var(--border-light)',
    strokeWidth: 2
  }), ...nodes.map((p, i) => React.createElement('circle', {
    key: i,
    cx: p[0],
    cy: p[1],
    r: i % 3 === 0 ? 7 : 4,
    fill: i % 3 === 0 ? 'var(--black)' : 'var(--border-light)'
  }))]);
}
Object.assign(__ds_scope, { HeroPattern });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/HeroPattern.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EyebrowLabel = __ds_scope.EyebrowLabel;

__ds_ns.StatusIndicator = __ds_scope.StatusIndicator;

__ds_ns.ClosingCTA = __ds_scope.ClosingCTA;

__ds_ns.IntegrationIconRow = __ds_scope.IntegrationIconRow;

__ds_ns.LogoRow = __ds_scope.LogoRow;

__ds_ns.OverlayCard = __ds_scope.OverlayCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.TwoPanelSection = __ds_scope.TwoPanelSection;

__ds_ns.BarChartCard = __ds_scope.BarChartCard;

__ds_ns.TerminalCard = __ds_scope.TerminalCard;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.HeroPattern = __ds_scope.HeroPattern;

})();
