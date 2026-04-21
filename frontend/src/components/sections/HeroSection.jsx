import rawHtml from '../../raw/section-0.html?raw';

export default function HeroSection() {
  return (
    <div
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}
