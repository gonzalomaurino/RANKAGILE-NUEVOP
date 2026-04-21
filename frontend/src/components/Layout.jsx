export default function Layout({ header, footer, children }) {
  return (
    <div id="page-container">
      <div id="et-boc" className="et-boc">
        {header}
        <div id="et-main-area">
          <div id="main-content">
            <article id="post-406" className="post-406 page type-page status-publish hentry">
              <div className="entry-content">
                <div className="et-l et-l--post">
                  <div className="et_builder_inner_content">
                    {children}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        {footer}
      </div>
    </div>
  );
}
