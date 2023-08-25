import imagen from '../../public/img/nosotros.jpg'
import styles from "~/styles/index.css";

export function meta() {
  return [
    {
      title: 'GuitarLA - Sobre Nosotros',
      description: 'Venta de guitarras, blog de música'
    }
  ]
  
}

export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>
          Sed rhoncus, tortor eu vulputate mattis, turpis libero vulputate magna, a aliquet velit augue ac quam. Aliquam porttitor consequat justo et placerat. Quisque facilisis in ipsum sit amet porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec id mauris fringilla, molestie tortor eu, tincidunt elit. Praesent vel libero lacinia, hendrerit magna eget, mollis leo. Integer molestie in libero vitae venenatis.
          </p>
          <p>
          Sed rhoncus, tortor eu vulputate mattis, turpis libero vulputate magna, a aliquet velit augue ac quam. Aliquam porttitor consequat justo et placerat. Quisque facilisis in ipsum sit amet porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec id mauris fringilla, molestie tortor eu, tincidunt elit. Praesent vel libero lacinia, hendrerit magna eget, mollis leo. Integer molestie in libero vitae venenatis.
          </p>
        </div>
      </div>
    </main>
  )
};

export default Nosotros;
