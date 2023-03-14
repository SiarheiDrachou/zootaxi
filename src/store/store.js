import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import text from '/public/language.json'

Vue.use(Vuex)

const LAZY_COMPONENTS = {
    lazyPrice: 'lazyPrice',
    lazyInformation: 'lazyInformation',
    lazyTaxi: 'lazyTaxi',
    lazySpecial: 'lazySpecial',
    lazyPromotion: 'lazyPromotion',
    lazySatisfied: 'lazySatisfied',
    lazyQuestions: 'lazyQuestions',
    lazyReviews: 'lazyReviews',
    lazyPartners: 'lazyPartners',
    taxiAnchor: 'taxiAnchor',
    servicesAnchor: 'servicesAnchor',
    priceAnchor: 'priceAnchor',
    header: 'header',
    informationAnchor: 'informationAnchor',
    specialAnchor: 'specialAnchor',
    promotionAnchor: 'promotionAnchor',
    ownerAnchor: 'ownerAnchor',
    cityAnchor: 'cityAnchor',
    alertAnchor: 'alertAnchor',
    warrantyAnchor: 'warrantyAnchor',
    reviewsAnchor: 'reviewsAnchor',
    partnersAnchor: 'partnersAnchor',
    contactsAnchor: 'contactsAnchor',
}

export default new Vuex.Store({
    state: {
        defaultLanguage: "ru",
        partnerStatistic: [],
        text: null,
        activeMenu: false,
        windowWidth: null,
        firstRequest: true,
        closePriceInformation: false,
        emptyForm: true,
        help: false,
        name: '',
        phone: null,
        callMe: false,
        confirm: false,
        success: false,
        notName: false,
        notPhone: false,
        notInput: false,
        typeRequest: '',
        viberLink: '',
        intercity: false,
        // для подгрузки по скроллу
        lazyPrice: false,
        lazyInformation: false,
        lazyTaxi: false,
        lazySpecial: false,
        lazyPromotion: false,
        lazySatisfied: false,
        lazyQuestions: false,
        lazyReviews: false,
        lazyPartners: false,
    },
    mutations: {
        setText(state, text) {
            state.text = text;
        },
        setTypeRequest(state, type) {
            state.typeRequest = type;
        },
        setActiveMenu(state) {
            if(state.windowWidth < 1024) {
                state.activeMenu = !state.activeMenu;
            }
        },
        setNotActiveMenu(state) {
            state.activeMenu = false;
        },
        setWindowWidth(state, width) {
            state.windowWidth = width;
        },
        setFirstRequest(state) {
            state.firstRequest = !state.firstRequest;
        },
        setResetRequest(state) {
            state.firstRequest = true;
            state.help = false;
            state.callMe = false;
            state.intercity = false;
            state.emptyForm = true;
        },
        setHelp(state) {
            state.help = !state.help;
        },
        setCallMe(state) {
            state.callMe = !state.callMe;
        },
        setEmptyForm(state) {
            state.emptyForm = false;
        },
        setName(state, name) {
            state.name = name;
            state.notName = false;
        },
        setPhone(state, phone) {
            state.phone = phone;
            state.notPhone = false;
        },
        setConfirm(state) {
            state.confirm = true;
        },
        setNotConfirm(state) {
            state.confirm = false;
        },
        setNotInput(state) {
            state.notInput = !state.notInput;
        },
        setNotName(state) {
            state.notName = true;
            state.notInput = true;
        },
        setNotPhone(state) {
            state.notPhone = true;
            state.notInput = true;
        },
        setSuccess(state) {
            state.success = !state.success;
        },
        setClosePriceInformation(state) {
            state.closePriceInformation = !state.closePriceInformation;
        },
        setIntercity(state, view) {
            state.intercity = view;
        },

        // замена номера для вайбера
        setViberLink(state, link) {
            state.viberLink = link;
        },

        // для подгрузки секций по скроллу
        scrollLazyComponent(state, section) {
            function scroll(anchorName) {
                setTimeout(() => {
                    const city = document.querySelector(`.${anchorName}`);
        
                    window.scrollTo({
                        top: city.getBoundingClientRect().top + pageYOffset,
                        behavior: "smooth"
                    });
                }, 500);
            }

            switch (section) {
                case LAZY_COMPONENTS.taxiAnchor:
                    state.lazyPrice = true;
                    state.lazyInformation = true;
                    state.lazyTaxi = true;

                    scroll(section);
                    break;
                case LAZY_COMPONENTS.servicesAnchor:
                    scroll(section);
                    break;
                case LAZY_COMPONENTS.header:
                    scroll(section);
                    break;
                case LAZY_COMPONENTS.warrantyAnchor:
                    scroll(section);
                    break;
                case LAZY_COMPONENTS.contactsAnchor:
                    scroll(section);
                    break;
                case LAZY_COMPONENTS.priceAnchor:
                    state.lazyPrice = true;

                    scroll(section);
                    break;
                case LAZY_COMPONENTS.ownerAnchor:
                    state.lazyPrice = true;

                    scroll(section);
                    break;
                case LAZY_COMPONENTS.cityAnchor:
                    state.lazyPrice = true;

                    scroll(section);
                    break;
                case LAZY_COMPONENTS.alertAnchor:
                    state.lazyPrice = true;

                    scroll(section);
                    break;
                case LAZY_COMPONENTS.informationAnchor:
                    state.lazyPrice = true;
                    state.lazyInformation = true;

                    scroll(section);
                    break;
                case LAZY_COMPONENTS.specialAnchor:
                    state.lazyPrice = true;
                    state.lazyInformation = true;
                    state.lazyTaxi = true;
                    state.lazySpecial = true;

                    scroll(section);
                    break;
                case LAZY_COMPONENTS.promotionAnchor:
                    state.lazyPrice = true;
                    state.lazyInformation = true;
                    state.lazyTaxi = true;
                    state.lazySpecial = true;
                    state.lazyPromotion = true;

                    scroll(section);
                    break;
                case LAZY_COMPONENTS.reviewsAnchor:
                    state.lazyPrice = true;
                    state.lazyInformation = true;
                    state.lazyTaxi = true;
                    state.lazySpecial = true;
                    state.lazyPromotion = true;
                    state.lazySatisfied = true;
                    state.lazyQuestions = true;
                    state.lazyReviews = true;

                    scroll(section);
                    break;
                case LAZY_COMPONENTS.partnersAnchor:
                    state.lazyPrice = true;
                    state.lazyInformation = true;
                    state.lazyTaxi = true;
                    state.lazySpecial = true;
                    state.lazyPromotion = true;
                    state.lazySatisfied = true;
                    state.lazyQuestions = true;
                    state.lazyReviews = true;
                    state.lazyPartners = true;

                    scroll(section);
                    break;
                default:
                    break;
            }
        },
        setLazyComponent(state, section) {
            switch (section) {
                case LAZY_COMPONENTS.lazyPrice:
                    state.lazyPrice = true;
                    break;
                case LAZY_COMPONENTS.lazyInformation:
                    state.lazyInformation = true;
                    break;
                case LAZY_COMPONENTS.lazyTaxi:
                    state.lazyTaxi = true;
                    break;
                case LAZY_COMPONENTS.lazySpecial:
                    state.lazySpecial = true;
                    break;
                case LAZY_COMPONENTS.lazyPromotion:
                    state.lazyPromotion = true;
                    break;
                case LAZY_COMPONENTS.lazySatisfied:
                    state.lazySatisfied = true;
                    break;
                case LAZY_COMPONENTS.lazyQuestions:
                    state.lazyQuestions = true;
                    break;
                case LAZY_COMPONENTS.lazyReviews:
                    state.lazyReviews = true;
                    break;
                case LAZY_COMPONENTS.lazyPartners:
                    state.lazyPartners = true;
                    break;
                default:
                    break;
            }
        },

        // получение переходов на партнеров для построение графика
        setPartnerStatistic(state, partnerList) {
            state.partnerStatistic = partnerList;
        }
    },
    actions: {
        getText({commit}) {
            commit('setText', text)
        },
        getTypeRequest({commit}, type) {
            commit('setTypeRequest', type);
        },
        getActiveMenu({commit}) {
            commit('setActiveMenu');
        },
        getNotActiveMenu({commit}) {
            commit('setNotActiveMenu');
        },
        getWindowWidth({commit}, width) {
            commit('setWindowWidth', width);
        },
        getFirstRequest({commit}) {
            commit('setFirstRequest');
        },
        getHelp({commit}) {
            commit('setHelp');
        },
        getCallMe({commit}) {
            commit('setCallMe');
        },
        getName({commit}, name) {
            commit('setName', name);
        },
        getPhone({commit}, phone) {
            commit('setPhone', phone);
        },
        getResetRequest({commit}) {
            commit('setResetRequest');
        },
        getSuccess({commit}) {
            commit('setSuccess');
        },
        getNotInput({commit}) {
            commit('setNotInput');
        },
        getClosePriceInformation({commit}) {
            commit('setClosePriceInformation');
        },
        sendMessage({commit, state}) {
            if(!state.name) {
                commit('setNotName');
            }
            else if(!state.phone) {
                commit('setNotPhone');
            }
            else {
                let msg = '';
                
                if(state.callMe) {
                    msg = encodeURI(
                        'Имя: ' + JSON.stringify(state.name).toUpperCase()
                        + "; \nТелефон: " 
                        + state.phone + ";\n Тип заявки:"
                        + JSON.stringify(' Заявка на обратный звонок;').toUpperCase());
                }
                else if (state.intercity) {
                    msg = encodeURI(
                        'Имя: ' + JSON.stringify(state.name).toUpperCase() +
                        ";\nТелефон: " +
                        state.phone + ";\nТип заявки:" +
                        JSON.stringify(' Межгород заявка со скидкой;').toUpperCase());
                }
                else if(state.help) {
                    msg = encodeURI(
                        'Имя: ' + JSON.stringify(state.name).toUpperCase()
                        + ";\nТелефон: " 
                        + state.phone + ";\nТип заявки:"
                        + JSON.stringify(' Заявка на межгород;').toUpperCase());
                }
                else if(state.firstRequest) {
                    msg = encodeURI(
                        'Имя: ' + JSON.stringify(state.name).toUpperCase()
                        + ";\nТелефон: " 
                        + state.phone + ";\nТип заявки:"
                        + JSON.stringify(' Первая заявка со скидкой;').toUpperCase());
                }
                else {
                    let type = state.typeRequest;
                    msg = encodeURI(
                        'Имя: ' + JSON.stringify(state.name).toUpperCase()
                        + ";\nТелефон: " 
                        + state.phone + ";\n"
                        + JSON.stringify('Заявка ' + type).toUpperCase());
                }

                axios.post('https://zootaxi.by/postMessage', {msg})
                    .then(function () {
                        commit('setConfirm');
                        commit('setSuccess');
                        commit('setResetRequest');

                        commit('setName', '');
                        commit('setPhone', null);
                    })
                    .catch(function () {
                        commit('setResetRequest');
                        commit('setNotConfirm');
                    });
            }
        },
        getIntercity({commit}, view) {
            commit('setIntercity', view);
        },

        // для замены номера вайбера
        getViberLink({commit}, device) {
            if(device === 'iOS' || device === 'Android') {
                commit('setViberLink', 'https://msng.link/o/?375447144111=vi');
                return ;
            }

            commit('setViberLink', 'viber://chat?number=%2B375447144111');
        },

        // для отображения секций по скроллу
        scrollLink({commit}, name) {
            commit('setNotActiveMenu');
            commit('scrollLazyComponent', name);
        },
        getLazyComponent({commit}, section) {
            commit('setLazyComponent', section);
        },

        // сбор статистики по партнерам в базу
        getPartner(_, partner) {
            axios.post(`https://zootaxi.by/postPartner`,
                {
                    partnerName: partner.href,
                    partnerId: partner.id,
                }
            )
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
        },
        getPartnerStatistic({commit}) {
            axios.get(`https://zootaxi.by/postPartner`)
            .then(function (res) {
                commit('setPartnerStatistic', res.data);
            })
            .catch(function (err) {
                console.log(err);
            });
        }
    },
    modules: {}
})


