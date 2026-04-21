import rawHtml from '../raw/footer.html?raw';

export default function Footer() {
  return (
    <footer
      className="et-l et-l--footer"
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}
