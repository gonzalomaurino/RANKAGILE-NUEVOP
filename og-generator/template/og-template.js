// template/og-template.js
// Define la composición visual. Modificá esto si querés cambiar el diseño
// global de TODAS las imágenes a la vez.

const BRAND = {
  bg: '#040414',
  accent: '#38feda',
  text: '#ffffff',
  textMuted: 'rgba(255, 255, 255, 0.65)',
};

export function ogTemplate({ line1, line2, subtitle, tag }) {
  return {
    type: 'div',
    props: {
      style: {
        width: '1200px',
        height: '630px',
        background: BRAND.bg,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: 'Inter',
        padding: '90px 100px',
        overflow: 'hidden',
      },
      children: [
        // Halo decorativo superior derecho
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              background: BRAND.accent,
              opacity: 0.06,
              display: 'flex',
            },
          },
        },
        // Halo inferior
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              bottom: '-60px',
              right: '120px',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: BRAND.accent,
              opacity: 0.04,
              display: 'flex',
            },
          },
        },
        // Logo header
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: BRAND.accent,
                    display: 'flex',
                  },
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '32px',
                    fontWeight: 600,
                    color: BRAND.text,
                    letterSpacing: '-0.5px',
                  },
                  children: 'RankAgile',
                },
              },
              tag
                ? {
                    type: 'div',
                    props: {
                      style: {
                        marginLeft: '20px',
                        padding: '6px 14px',
                        border: `1px solid ${BRAND.accent}`,
                        borderRadius: '4px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: BRAND.accent,
                        letterSpacing: '2px',
                        display: 'flex',
                      },
                      children: tag,
                    },
                  }
                : null,
            ].filter(Boolean),
          },
        },
        // Línea de acento separadora
        {
          type: 'div',
          props: {
            style: {
              width: '72px',
              height: '3px',
              background: BRAND.accent,
              marginTop: '90px',
              display: 'flex',
            },
          },
        },
        // Titular dos líneas
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              marginTop: '36px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '76px',
                    fontWeight: 600,
                    color: BRAND.text,
                    letterSpacing: '-2.5px',
                    lineHeight: 1.05,
                  },
                  children: line1,
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '76px',
                    fontWeight: 600,
                    color: BRAND.accent,
                    letterSpacing: '-2.5px',
                    lineHeight: 1.05,
                    marginTop: '8px',
                  },
                  children: line2,
                },
              },
            ],
          },
        },
        // Subtítulo
        {
          type: 'div',
          props: {
            style: {
              fontSize: '26px',
              fontWeight: 400,
              color: BRAND.textMuted,
              marginTop: '32px',
              lineHeight: 1.4,
              whiteSpace: 'pre-line',
              display: 'flex',
            },
            children: subtitle,
          },
        },
        // Footer con dominio
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              bottom: '60px',
              left: '100px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    width: '10px',
                    height: '10px',
                    background: BRAND.accent,
                    display: 'flex',
                  },
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontFamily: 'JetBrainsMono',
                    fontSize: '18px',
                    color: BRAND.accent,
                    letterSpacing: '3px',
                    display: 'flex',
                  },
                  children: 'RANKAGILE.COM',
                },
              },
            ],
          },
        },
      ],
    },
  };
}
