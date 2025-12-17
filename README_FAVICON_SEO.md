# Somos Gero - Website

## Favicon

O favicon do site usa a imagem `ICONE 1.png` da pasta `/public/logos/`.

### Para gerar o favicon.ico:

1. Acesse: https://www.favicon-generator.org/ ou https://realfavicongenerator.net/
2. Faça upload da imagem: `/public/logos/ICONE 1.png`
3. Faça download do arquivo `.ico` gerado
4. Salve como `/public/favicon.ico`

Ou use o comando ImageMagick (se instalado):
```bash
magick convert "public/logos/ICONE 1.png" -define icon:auto-resize=256,128,96,64,48,32,16 public/favicon.ico
```

Enquanto isso, o navegador usará a imagem PNG como fallback.

## Formulário de Contato

O formulário coleta:
- Nome
- Email
- Telefone
- Mensagem (opcional)

### Funcionalidades:
1. **Webhook**: Envia dados + UTMs para `https://n8n-webhook.7it7cw.easypanel.host/webhook/somos-gero`
2. **Captura de UTMs**: Coleta automaticamente utm_source, utm_medium, utm_campaign, utm_term, utm_content da URL
3. **Redirecionamento WhatsApp**: Após envio, redireciona para WhatsApp (+55 43 9632-8616) com mensagem personalizada

## SEO

O site está otimizado para SEO com:
- Meta tags completas
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Schema.org structured data
- Canonical URLs
- Sitemap pronto para ser gerado

### Para gerar sitemap:
Use https://www.xml-sitemaps.com/ ou crie manualmente em `/public/sitemap.xml`
