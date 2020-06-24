import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <div className="Index__row IndexSelector__row">
            <div className="IndexSelector__left Index__col-3">
                <div className="Index__searchLine">
                    <div className="RichInput SearchLineSuggest">
                        <div className="SearchLineSuggest__input">
                            <span className="ControlGroup ControlGroup_responsive_no">
                                <label className="TextInput TextInput_size_l TextInput_has-clear TextInput_has-placeholder TextInput_width_full">
                                    <div className="TextInput__input">
                                        <span className="TextInput__box">
                                            <div className="TextInput__placeholder">Поиск по объявлениям</div>
                                            <input type="text" className="TextInput__control" maxlength="80" value="" />
                                            <i className="TextInput__clear"></i>
                                        </span>
                                    </div>
                                </label>
                                <button className="Button Button_color_blue Button_size_l Button_type_button Button_width_default SearchLineSuggest__button" type="button">
                                    <span className="Button__content">
                                            <svg className="IconSvg IconSvg_search-small IconSvg_size_24 SearchLineSuggest__iconSearch">
                                                <use xlinkHref="#search-small"></use>
                                            </svg>
                                    </span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Index__col Index__col-1-0">
                    <a className="Button Button_color_red Button_size_l Button_type_link Button_width_full Button_radius_round IndexSelectorYoutubeBanner IndexSelectorYoutubeBanner_type_button" role="link" href="{https://www.youtube.com/user/AutoRuTv/featured}" target=" _blank">
                    <span className="Button__content">
                            <span className="Button__text">Канал на YouTube </span>
                            <svg className="IconSvg IconSvg_youtube_icon IconSvg_size_24 IndexSelectorYoutubeBanner__icon">
                                <use xlinkHref="#youtube_icon"></use>
                            </svg>
                    </span>
                </a>
            </div>
        </div>
        <div className="Index__row IndexSelector__row">
            <div className="IndexSelector__left Index__col-3">
                <div className="Index__title IndexSelector__title">
                    <a className="Index__title-link" href="https://auto.ru/cars/new/?from=index">
                        <span>Новые легковые </span><h1 className="Index__title-h1">автомобили </h1>
                    </a>
                </div>
                <div className="IndexSelector__exclusive">
                    <span className="IndexSelector__exclusive-text">662&nbsp;125&nbsp;предложений, из них 126&nbsp;882&nbsp;размещены только на Авто.ру</span>
                    <div className="InfoPopup InfoPopup_theme_plain InfoPopup_withChildren ExclusiveOfferPopup__infoPopup">
                        <svg className="IconSvg IconSvg_help-filled IconSvg_size_24 IndexSelector__exclusive-icon">
                            <use xlinkHref="#help-filled"></use>
                        </svg>
                        <div className="Popup Popup-info ">
                        </div>
                    </div>
                </div>
                <div className="y-ad-block">
                    <a id="click1_area" target=" _blank" href="https://auto.ru/_crpd/6c4Yub852/aebf78ZgYkRM/KxgH8PDQXF90KSG938FU3O3M22dccDWcMk4q6HVKIzS2d7BtOxfWbrhY6Emhzid7zbiNILmA1SXHH4EHlDJ3DCusk7CD4859YJghDKsyl6h8rJqGyMamWGXtGf52uPAU4LYR6qmk1tq43Xhq4R0zrAvKTqPKQZC1w58xx8AQdFhMjXMiUXAde1FJ0Z2rUnbdbm7PEZqVhguGmup4J3ohM7Wj82rYdNHKPg8oveZPpFu9y332aXbVQlUpNtPyIJeojfwT8FOSLMxludKMn5P3bQ-92dLod6C4Ja276yXsAiBn8gIqaHMmbj0cXV3R6iQ_i-hr8zpFtSWmPuH1RBCmTe09gjBhYIxcoAnzPGzDNnh-3c8BKsf16QafuGrlHGFyoKcBmYpUJnos71kIAX-H653qXrOohmLRIwzzBNPBRhxejmJwwPT_GxGqMg58oRapSL5Y9pgB5wwFv9r5EOtHIrfGt8z91NV67C25yZE9dvstWfxSiLVS1ATeQVZyNgUvS92yEqK0_HtVSsTOXHBBiRwtCka9scfcFN9J-fWNoLHXZiJteHRFqM-MrJnA_YS87HgLMUmFkwBznHNk1GB16C5cYzLRY3wOdZuyX1rAVjr-OQoRupbWXcY-KkiGS2AT5hXR2rt05gu8HJkcMn5FHU" className="img">
                        <p className="title">НОВЫЙ ŠKODA RAPID</p>
                        <p className="description">СХОДИМСЯ В ОДНОМ</p>
                        <p className="ad">РЕКЛАМА</p>
                        <div className="logo"></div>
                    </a>
                </div>
            </div>
            <div className="Index__col Index__col-1-0 IndexSelector__col-teaser">
                <h2 className="JournalTeaser__heading JournalTeaser__headingWithSubtitle">
                    <a className="Link JournalTeaser__heading-link" href="https://mag.auto.ru/?utm_content=block-mag-title&amp;utm_campaign=glavnaya_top&amp;from=banner&amp;utm_source=auto-ru&amp;utm_medium=cpm">Журнал</a>
                </h2>
                <div className="JournalTeaser__subtitle">Новости, обзоры, статьи</div>
                <div className="JournalTeaser">
                    <div className="JournalTeaserListOfArticles">
                        <ul className="JournalTeaserListOfArticles__list">
                            <li className="JournalTeaserListOfArticles__article JournalTeaserListOfArticles__article_invisible">
                                <a className="Link Link_color_black JournalTeaserListOfArticles__link" href="https://mag.auto.ru/article/bmw2atspied/?utm_content=bmw2atspied&amp;utm_campaign=glavnaya_top&amp;from=banner&amp;utm_source=auto-ru&amp;utm_medium=cpm">
                                    <img className="JournalTeaserListOfArticles__preview" src="https://autoru-mag.s3.yandex.net/2020/06/23/7dc210a009014f0b9726487c1fb28bc0.jpeg/mobile" />
                                    <span className="JournalTeaserListOfArticles__text">Интерьер «двойки» BMW будет похож на салоны Mercedes-Benz</span>
                                    </a>
                                </li>
                                <li className="JournalTeaserListOfArticles__article JournalTeaserListOfArticles__article_visible">
                                <a className="Link Link_color_black JournalTeaserListOfArticles__link" href="https://mag.auto.ru/article/autoruads210620/?utm_content=autoruads210620&amp;utm_campaign=glavnaya_top&amp;from=banner&amp;utm_source=auto-ru&amp;utm_medium=cpm">
                                    <img className="JournalTeaserListOfArticles__preview" src="https://autoru-mag.s3.yandex.net/2020/06/19/7c19488f394b41b3b15e48c7702e2ce8.jpg/mobile" />
                                    <span className="JournalTeaserListOfArticles__text">От Прадо до Дьябло: самые интересные объявления на Авто.ру</span>
                                </a>
                            </li>
                            <li className="JournalTeaserListOfArticles__article JournalTeaserListOfArticles__article_visible">
                                <a className="Link Link_color_black JournalTeaserListOfArticles__link" href="https://mag.auto.ru/article/audiunderwater/?utm_content=audiunderwater&amp;utm_campaign=glavnaya_top&amp;from=banner&amp;utm_source=auto-ru&amp;utm_medium=cpm">
                                    <img className="JournalTeaserListOfArticles__preview" src="https://autoru-mag.s3.yandex.net/2020/06/22/68eecda1c22d4f8d9d7d9031599684d8.jpeg/mobile" />
                                    <span className="JournalTeaserListOfArticles__text">Водитель Audi не заметил огромную лужу и&nbsp;поплыл</span>
                                </a>
                            </li>
                            <li className="JournalTeaserListOfArticles__article JournalTeaserListOfArticles__article_visible">
                                <a className="Link Link_color_black JournalTeaserListOfArticles__link" href="https://mag.auto.ru/article/gtacanadaitaly/?utm_content=gtacanadaitaly&amp;utm_campaign=glavnaya_top&amp;from=banner&amp;utm_source=auto-ru&amp;utm_medium=cpm">
                                    <img className="JournalTeaserListOfArticles__preview" src="https://autoru-mag.s3.yandex.net/2020/06/19/8a7eafa46d5341faae1203178a2df230.jpg/mobile" />
                                    <span className="JournalTeaserListOfArticles__text">40 угнанных в Канаде машин нашли в контейнерах в Италии</span>
                                </a>
                            </li>
                            <li className="JournalTeaserListOfArticles__article JournalTeaserListOfArticles__article_visible">
                                <a className="Link Link_color_black JournalTeaserListOfArticles__link" href="https://mag.auto.ru/article/oldmandrivesmclaren/?utm_content=oldmandrivesmclaren&amp;utm_campaign=glavnaya_top&amp;from=banner&amp;utm_source=auto-ru&amp;utm_medium=cpm">
                                    <img className="JournalTeaserListOfArticles__preview" src="https://autoru-mag.s3.yandex.net/2020/06/22/8468882546e64569b44678d4531d54f0.jpeg/mobile" />
                                <span className="JournalTeaserListOfArticles__text">78-летний норвежец купил суперкар McLaren. Это его машина на каждый день</span>
                                </a>
                            </li>
                            <li className="JournalTeaserListOfArticles__article JournalTeaserListOfArticles__article_invisible">
                                <a className="Link Link_color_black JournalTeaserListOfArticles__link" href="https://mag.auto.ru/article/tuvcsuvreport/?utm_content=tuvcsuvreport&amp;utm_campaign=glavnaya_top&amp;from=banner&amp;utm_source=auto-ru&amp;utm_medium=cpm">
                                    <img className="JournalTeaserListOfArticles__preview" src="https://autoru-mag.s3.yandex.net/2020/06/16/1471315c77d04be4b92bfc8e57563b37.jpeg/mobile" />
                                    <span className="JournalTeaserListOfArticles__text">Немцы назвали самые надёжные кроссоверы. Хуже всех — Дастер</span>
                                </a>
                            </li>
                        </ul>
                        <a className="Button Button_color_transparentBlackBlue Button_size_l Button_type_link Button_width_full" role="link" href="https://mag.auto.ru/?utm_content=block-mag-read-more&amp;utm_campaign=glavnaya_top&amp;from=banner&amp;utm_source=auto-ru&amp;utm_medium=cpm">
                            <span className="Button__content">
                                <span className="Button__text">Все материалы</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
              <div className="IndexPresets Index__block">
                  <div className="IndexPresets__header">
                      <div className="IndexPresets__title">Подборки</div>
                      <div className="IndexPresets__load-more">
                          <button className="Button Button_color_white Button_size_m Button_type_button Button_width_default IndexPresets__load-more-button" type="button">
                              <span className="Button__content">
                                  <svg className="IconSvg IconSvg_reload IconSvg_size_24">
                                      <use xlinkHref="#reload"></use>
                                </svg>
                                <span className="Button__text">Обновить</span>
                            </span>
                        </button>
                    </div>
                    <div className="IndexPresets__tabs">
                        <span className="RadioGroup RadioGroup_type_button RadioGroup_size_m ButtonGroup">
                            <label className="Radio Radio_checked Radio_size_m Radio_type_button">
                                <input type="hidden" value="new-cars-with-discount" />
                                <button className="Button Button_color_whiteHoverBlue Button_checked Button_size_m Button_type_button Button_width_default" type="button">
                                    <span className="Button__content">
                                        <svg className="IconSvg IconSvg_keychain IconSvg_size_24 IndexPresets__tab-icon IndexPresets__tab-icon_keychain">
                                            <use xlinkHref="#keychain"></use>
                                        </svg>
                                        <span className="Button__text">Новые со скидкой</span>
                                    </span>
                                </button>
                            </label>
                            <label className="Radio Radio_size_m Radio_type_button">
                                <button className="Button Button_color_whiteHoverBlue Button_size_m Button_type_button Button_width_default" type="button">
                                    <span className="Button__content">
                                        <div className="InfoPopup InfoPopup_theme_plain InfoPopup_withChildren SaleServicesPopup__infoPopupContent IndexPresets__tab-popup">
                                            <svg className="IconSvg IconSvg_vas-special-small IconSvg_size_24 IndexPresets__tab-icon IndexPresets__tab-icon_vas-special-small">
                                                <use xlinkHref="#vas-special-small"></use>
                                            </svg>
                                            <div className="Popup Popup-info ">
                                            </div>
                                        </div>
                                        <span className="Button__text">Спецпредложения</span>
                                    </span>
                                </button>
                            </label>
                            <label className="Radio Radio_size_m Radio_type_button">
                                <button className="Button Button_color_whiteHoverBlue Button_size_m Button_type_button Button_width_default" type="button">
                                    <span className="Button__content">
                                        <svg className="IconSvg IconSvg_price-down-big IconSvg_size_24 IndexPresets__tab-icon IndexPresets__tab-icon_price-down-big">
                                            <use xlinkHref="#price-down-big"></use>
                                        </svg>
                                        <span className="Button__text">Сниженная цена</span>
                                    </span>
                                </button>
                            </label>
                            <label className="Radio Radio_size_m Radio_type_button">
                                <button className="Button Button_color_whiteHoverBlue Button_size_m Button_type_button Button_width_default" type="button">
                                    <span className="Button__content">
                                        <span className="Button__text">Американская классика</span>
                                    </span>
                                </button>
                            </label>
                        </span>
                    </div>
                </div >
                <div className="row">
                    <div className="col-lg-3">
                        <div class="IndexPresets__offer-photo">
                            <div class="Brazzers">
                                <div class="LazyImage Brazzers__image LazyImage_loaded LazyImage_visible" data-src="//avatars.mds.yandex.net/get-autoru-vos/1545460/bc622d3e00e12c42fd3e381b7660a6ca/320x240">
                                    <div class="LazyImage__previewContainer LazyImage__previewContainer_fallback">
                                    </div>
                                    <img class="LazyImage__image" src="//avatars.mds.yandex.net/get-autoru-vos/1545460/bc622d3e00e12c42fd3e381b7660a6ca/320x240" />
                                </div>
                            </div>
                        </div>
                        <div class="IndexPresets__offer-title">Hyundai Solaris, новый</div>
                        <div class="IndexPresets__offer-price">546&nbsp;000&nbsp;₽<span class="IndexPresets__offer-price-original">856&nbsp;000&nbsp;₽</span></div>
                        <div class="IndexPresets__offer-discount">Скидка до 310&nbsp;000&nbsp;₽</div>
                    </div>
                    <div className="col-lg-3">
                        <div class="IndexPresets__offer-photo">
                            <div class="Brazzers">
                                <div class="LazyImage Brazzers__image LazyImage_loaded LazyImage_visible" data-src="//avatars.mds.yandex.net/get-autoru-vos/1545460/bc622d3e00e12c42fd3e381b7660a6ca/320x240">
                                    <div class="LazyImage__previewContainer LazyImage__previewContainer_fallback">
                                    </div>
                                    <img class="LazyImage__image" src="//avatars.mds.yandex.net/get-autoru-vos/1545460/bc622d3e00e12c42fd3e381b7660a6ca/320x240" />
                                </div>
                            </div>
                        </div>
                        <div class="IndexPresets__offer-title">Hyundai Solaris, новый</div>
                        <div class="IndexPresets__offer-price">546&nbsp;000&nbsp;₽<span class="IndexPresets__offer-price-original">856&nbsp;000&nbsp;₽</span></div>
                        <div class="IndexPresets__offer-discount">Скидка до 310&nbsp;000&nbsp;₽</div>
                    </div>
                    <div className="col-lg-3">
                        <div class="IndexPresets__offer-photo">
                            <div class="Brazzers">
                                <div class="LazyImage Brazzers__image LazyImage_loaded LazyImage_visible" data-src="//avatars.mds.yandex.net/get-autoru-vos/1545460/bc622d3e00e12c42fd3e381b7660a6ca/320x240">
                                    <div class="LazyImage__previewContainer LazyImage__previewContainer_fallback">
                                    </div>
                                    <img class="LazyImage__image" src="//avatars.mds.yandex.net/get-autoru-vos/1545460/bc622d3e00e12c42fd3e381b7660a6ca/320x240" />
                                </div>
                            </div>
                        </div>
                        <div class="IndexPresets__offer-title">Hyundai Solaris, новый</div>
                        <div class="IndexPresets__offer-price">546&nbsp;000&nbsp;₽<span class="IndexPresets__offer-price-original">856&nbsp;000&nbsp;₽</span></div>
                        <div class="IndexPresets__offer-discount">Скидка до 310&nbsp;000&nbsp;₽</div>
                    </div>
                    <div className="col-lg-3">
                        <div class="IndexPresets__offer-photo">
                            <div class="Brazzers">
                                <div class="LazyImage Brazzers__image LazyImage_loaded LazyImage_visible" data-src="//avatars.mds.yandex.net/get-autoru-vos/1545460/bc622d3e00e12c42fd3e381b7660a6ca/320x240">
                                    <div class="LazyImage__previewContainer LazyImage__previewContainer_fallback">
                                    </div>
                                    <img class="LazyImage__image" src="//avatars.mds.yandex.net/get-autoru-vos/1545460/bc622d3e00e12c42fd3e381b7660a6ca/320x240" />
                                </div>
                            </div>
                        </div>
                        <div class="IndexPresets__offer-title">Hyundai Solaris, новый</div>
                        <div class="IndexPresets__offer-price">546&nbsp;000&nbsp;₽<span class="IndexPresets__offer-price-original">856&nbsp;000&nbsp;₽</span></div>
                        <div class="IndexPresets__offer-discount">Скидка до 310&nbsp;000&nbsp;₽</div>
                    </div>
                </div>
            </div>
            </div>
    );
  }
}
