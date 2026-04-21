import rawHtml from '../../raw/section-7.html?raw';

export default function FaqSection() {
  return (
    <div
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}
