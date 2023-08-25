import { Link } from "@remix-run/react";
import { formatFecha } from "../utils/helpers";
export default function Post({post}) {

    const {contenido, imagen, url, titulo, publishedAt } = post;
    return (
       <article className="post">
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`Imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatFecha(publishedAt)}</p>
            <p className="resumen">{contenido}</p>
            <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
        </div>
       </article>
    )
}
