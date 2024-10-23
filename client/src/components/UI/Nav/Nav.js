import React, { useState, useEffect } from 'react';

import Link from '../Link/Link';

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 200) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);
  return (
    <nav className={`navbar navbar-expand-lg bg-light ${navClass}`}>
      <div className='container justify-content-start'>
        <a className='navbar-brand' href='/'>
          <img height={'auto'} width={80} src='/assets/logo/logoSG.png'></img>
          <p className='logo-subtext'>
            Stability's Gain
          </p>
        </a>
        <a className='navbar-brand' href='/'>
          <img height={'auto'} width={200} src='/assets/logo/logoText.png'></img>
          <p className='logo-subtext-textholder'>
          </p>
        </a>
        <div
          className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return 'open';
            return '';
          })()}`}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className='container justify-content-center '>
        <div
          className={` ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >
          <ul className='navbar-nav ml-auto justify-content-center  '>
            <li className='nav-item'>
              <Link target='/' offset={-120} classes='nav-link'>
                Anasayfa
              </Link>
            </li>
            <li className='nav-item nav-menu'>
              <Link target='/' classes='nav-link'>
                HİZMETLERİMİZ
                <i class="fa-solid fa-caret-down dropdown-icon"></i>
              </Link>
              <ul className='nav-submenu'>
                <li className='submenu-item'>
                  <Link target='/sgk' classes='nav-link'>
                    SGK
                  </Link>
                  <ul className='sub-nav-submenu'>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        SGK İSTİHDAM TEŞVİKLERİ
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        Sosyal GÜVENLİK MÜŞAVİRLİĞİ
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        SGK İnceleme Danışmanlığı
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        İSTİHDAM MALİYET YÖNETİMİ
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        İş Hukuku MÜŞAVİRLİĞİ
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        EMEKLİLİK İŞLEMLERİ
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='submenu-item'>
                  <Link target='/' classes='nav-link'>
                    VERGİ
                  </Link>
                  <ul className='sub-nav-submenu'>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        VERGİ İnceleme Danışmanlığı
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        VERGİ Planlama Danışmanlığı
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        Tam TASDİK HİZMETLERİ
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='submenu-item'>
                  <Link target='/' classes='nav-link'>
                    Devlet TEŞVİK Destek ve HİBELERİ
                  </Link>
                  <ul className='sub-nav-submenu'>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        KOSGEB TEŞVİK ve HİBELERİ
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        TİCARET Bakanlığı DESTEKLERİ
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        TÜBİTAK DESTEKLERİ
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        SANAYİ ve TEKNOLOJİ Bakanlığı DESTEKLERİ
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        TURQUALITY
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        Kalkınma Ajansı DESTEKLERİ
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        Ar-Ge ve Ür-Ge Danışmanlığı
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        İŞKUR İşbaşı EĞİTİM Programları
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        Ustalık TELAFİ Programı
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        Avrupa BİRLİĞİ HİBE ve TEŞVİK Programları
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        KGF Destek KREDİLERİ
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        GES ve RES Yatırım TEŞVİKLERİ
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='submenu-item'>
                  <Link target='/' classes='nav-link'>
                    EĞİTİM
                  </Link>
                  <ul className='sub-nav-submenu'>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        SGK Mevzuatı EĞİTİMLERİ
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        VERGİ Mevzuat EĞİTİMLERİ
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        İnsan Kaynakları EĞİTİMLERİ
                      </Link>
                    </li>
                    <li className='sub-submenu-item'>
                      <Link target='/' classes='nav-link'>
                        İş Hukuku EĞİTİMLERİ
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link target='/' classes='nav-link'>
                Referanslarımız
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='/' classes='nav-link'>
                Hakkımızda
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='/' classes='nav-link'>
                İLETİŞİM
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
