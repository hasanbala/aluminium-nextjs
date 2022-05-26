import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export const ProductsNav = () => {
  const [toggle, setToggle] = useState(false);
  const handleOpenToggle = () => setToggle(!toggle);

  const toggleStyle = clsx({
    ["products-item plus"]: toggle === true,
    ["products-item"]: toggle === false,
  });

  return (
    <>
      <h2>ÜRÜNLER</h2>
      <div className='products-topbar'>
        <nav className='products-nav'>
          <div className='products-list'>
            <ul>
              <li className='products-logo'>
                <Link href='/products/mafsal'>
                  <a>Ürün Grupları</a>
                </Link>
              </li>
              <li className='products-toggle'>
                <i
                  className='fas fa-align-justify'
                  onClick={handleOpenToggle}
                />
              </li>
              <li className={toggleStyle}>
                <Link href='/products/flanslar'>
                  <a data-hover='Flanşlar'>Flanşlar</a>
                </Link>
              </li>
              <li className={toggleStyle}>
                <Link href='/products/tapalar'>
                  <a data-hover='Tapalar'>Tapalar</a>
                </Link>
              </li>
              <li className={toggleStyle}>
                <Link href='/products/pleksi'>
                  <a data-hover='Pleksi'>Pleksi</a>
                </Link>
              </li>
              <li className={toggleStyle}>
                <Link href='/products/bilezikler'>
                  <a data-hover='Bilezikler'>Bilezikler</a>
                </Link>
              </li>
              <li className={toggleStyle}>
                <Link href='/products/donusler'>
                  <a data-hover='Dönüşler'>Dönüşler</a>
                </Link>
              </li>
              <li className={toggleStyle}>
                <Link href='/products/camtutucular'>
                  <a data-hover='CamTutucuları'>CamTutucuları</a>
                </Link>
              </li>
              <li className={toggleStyle}>
                <Link href='/products/baglantilar'>
                  <a data-hover='Bağlantılar'>Bağlantılar</a>
                </Link>
              </li>
              <li className={toggleStyle}>
                <Link href='/products/profiller'>
                  <a data-hover='Profiller'>Profiller</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
