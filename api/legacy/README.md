# Legacy

Este directorio alberga cualquier lógica de backend heredada del export estático
de WordPress (archivos PHP, plugins portables, snippets de Divi, etc.) que se
conserve como referencia durante la migración. La exportación original de
Simply Static no contenía PHP ejecutable: todo el HTML fue prerenderizado por
el servidor WordPress de origen. Si en el futuro se recupera código legado
(por ejemplo, handlers de contacto en PHP), vive aquí hasta que se reimplemente
en el stack Node/Express.
