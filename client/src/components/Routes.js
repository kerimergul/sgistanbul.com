import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from './sections/Home/Home';
import About from './sections/About/About';
import Service from './sections/Service/Service';
import Blog from './sections/Blog/Blog';
import Contact from './sections/Contact/Contact';
import References from './sections/References/References';

const RoutesLayout = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hakkimizda" component={About} />
            <Route path='/referanslarimiz' component={References} />
            <Route path="/hizmetlerimiz" component={Service} />

            <Route path="/sgk" component={About} />
            <Route path="/sgk-istihdam-tesvikleri" component={About} />
            <Route path="/sosyal-guvenlik-musavirligi" component={About} />
            <Route path="/sgk-inceleme-danismanligi" component={About} />
            <Route path="/istihdam-maliyet-yonetimi" component={About} />
            <Route path="/is-hukuku-musavirligi" component={About} />
            <Route path="/emeklilik-islemleri" component={About} />
          
            <Route path="/vergi" component={About} />
            <Route path="/vergi-inceleme-danismanligi" component={About} />
            <Route path="/vergi-planlama-danismanligi" component={About} />
            <Route path="/tam-tasdik-hizmetleri" component={About} />

            <Route path="/tesvik" component={About} />
            <Route path="/kosgeb-tesvik-ve-hibeleri" component={About} />
            <Route path="/ticaret-bakanligi-destekleri" component={About} />
            <Route path="/tubitak-destekleri" component={About} />
            <Route path="/sanayi-ve-teknoloji-bakanligi-destekleri" component={About} />
            <Route path="/turquality" component={About} />
            <Route path="/kalkinma-ajansi-destekleri" component={About} />
            <Route path="/arge-ve-urge-danismanligi" component={About} />
            <Route path="/iskur-isbasi-egitim-programlari" component={About} />
            <Route path="/ustalik-telafi-programi" component={About} />
            <Route path="/avrupa-birligi-hibe-ve-tesvik-programlari" component={About} />
            <Route path="/kgf-destek-kredileri" component={About} />
            <Route path="/ges-ve-res-yatirim-tesvikleri" component={About} />

            <Route path="/egitim" component={About} />
            <Route path="/sgk-mevzuati-egitimleri" component={About} />
            <Route path="/vergi-mevzuat-egitimleri" component={About} />
            <Route path="/insan-kaynaklari-egitimleri" component={About} />
            <Route path="/is-hukuku-egitimleri" component={About} />

            <Route path="/blog" component={Blog} />
            <Route path="/iletisim" component={Contact} />
        </Switch>
    );
};

export default RoutesLayout;
