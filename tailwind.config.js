/**
* Configuration
*/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    content: 
            ['./pages/*.html',
            './assets/**/*.js'],
    corePlugins: {
        preflight: false,  
    },
    darkMode: 'class', // or 'media' or 'class' 
    theme: {
        fontFamily: {
            interstate: ['"interstate", sans-serif'],                
            workSans: ['"work-sans",sans-serif'],                  
        },
        flex: {
            '1': '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            inherit: 'inherit',   
            none: 'none',
            '2': '2 2 0%',
        },
        colors: {
            transparent: 'transparent',   
            white: '#FFFFFF',  
            black: '#000000', 
            fonts: '#555555',  
            richBlack: '#414141',
            primary: '#14569B',
            cream: '#F4F4F4',
            darkBlue: '#00274F',
            dakBlue_8: 'rgba(0, 39, 79, 0.8)',
            grey:"#8f8c87",
        }, 
        container: {
            center: true,
            padding: '15px',
        },
        zIndex: {
            '1_minus': '-1',
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            9: 9,
            10: 10,
            20: 20,
            11: 11,
            12: 12,
            98: 98,
            99: 99,
            100: 100,
            999: 999,
            9999: 9999,
        },
        padding: {
            0: '0px',
            5: '5px',
            6: '6px',
            7: '7px',
            8: '8px',
            10: '10px',
            14:'14px',
            15: '15px',
            16: '16px', 
            18: '18px',
            20: '20px',
            21: '21px',
            24: '24px',
            25: '25px',
            26: '26px',
            27: '27px',
            28: '28px',
            29: '29px',
            30: '30px',
            31: '31px',
            32: '32px',
            35: '35px',
            37: '37px',
            40: '40px',
            41: '41px',
            42: '42px',
            45: '45px',
            47: '47px',
            50: '50px',
            52: '52px',
            53: '52.5px',
            55: '55px',
            58: '58px',
            60: '60px',
            65: '65px',
            70: '70px',
            75: '75px',
            80: '80px',
            100: '100px',
            110: '110px',
            130: '130px',
            150: '150px',
        },
        margin: {
            auto: 'auto',
            0: '0px',
            3: '3px',
            5: '5px',
            6: '6px',
            8: '8px',
            10: '10px',
            14:'14px',
            15: '15px',
            18: '18px',
            20: '20px',
            25: '25px',
            28:'28px',
            30: '30px',
            35: '35px',
            40: '40px',
            45: '45px',
            50: '50px',
            55: '55px',
            60: '60px',
            70: '70px',
            80: '80px',
            85: '85px',
            90: '90px',
        },
        lineHeight: {
            content: '25px',
            auto:'initial',
            0: '0px', 
            15: '15px',
            16: '16px',
            19: '19px', 
            20: '20px',
            22: '22px', 
            24: '24px', 
            26: '26px',
            40: '40px'
        },
        letterSpacing: {            
            '01em': '0.1em',           
        },
        fontSize: {
            16: '16px',
            20: '20px',
            24:'24px',
            32: '32px',
            48:'48px',
            64: '64px',
        },
        fontWeight: {
            inLgt: '400',
            inBold: '700',
            inBlack: '800',
            wsReg: '400',
            wsBold: '700',
        },
        spacing: {
            '28':'28px',
            '30':'30px',
            '70': '70px',
            '55': '55px',
            '80': '80px',
            '140':'140px',
        },
        translate: {
            '30':'30px',
        },
        inset: {
            inherit:'inherit',
            0: '0px',
            2: '2px',
            4: '4px',
            5: '5px',
            6: '6px',
            10: '10px',
            13: '13px',
            15:'15px',
            20: '20px',
            'minus40pr': '-40%',
            half: '50%',
            '100%': '100%',
            '110%': '110%',
            'minus_100%':'-100%',
        },
        backgroundImage: theme => ({
            none: 'none',
            'alpha_Gradient': 'linear-gradient( 180deg, rgba(20, 86, 155, 1) 0%, rgba(0, 39, 79, 1) 100% )',
            'grey_gradient': 'linear-gradient(90deg, #414141 0%, rgba(65, 65, 65, 0.875) 39.81%, rgba(65, 65, 65, 0.722538) 60.37%, rgba(65, 65, 65, 0.531022) 71.95%, rgba(65, 65, 65, 0) 100%)',
            'grey_gradient_mobile':'linear-gradient(180deg, #414141 0%, rgba(65, 65, 65, 0.875) 25.83%, rgba(65, 65, 65, 0.722538) 51.23%, rgba(65, 65, 65, 0.531022) 71.95%, rgba(65, 65, 65, 0) 100%)',
        }), 
        borderRadius: {
            none: '0',
            1: '1px',
            2: '2px',
            5: '5px',
            half: '50%',
        },
        translate: {
            0: '0px',
            halfPx: '50px',
            "100pr": '100%',
            "7_minus": '-7px',
            'minus_50': '-50%',
        },
        transitionProperty: {
            all: 'all',
            common: 'all 3s cubic-bezier(0.23, 0.93, 0.23, 0.93)',
            backgroundColor: ' background-color',
            textColor: 'color',
            opacity: 'opacity',
            none:'none',
        },
        keyframes: {

        },
        animation: {

        },
        backgroundSize: {
            100: '100%',
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            '100%_auto': '100% auto',
            'auto_100%':'auto 100%',
        },
        blur: {

        },  
        brightness: {

        },
        borderWidth: {
            1: '1px',
            2: '2px',
            12: '12px',
            0: '0px',
        },
        scale: {
            1.05: '1.05',
        }, 
        contrast: {},
        outline: {
            none: 'none',
        },
        ringOffsetWidth: {},
        ringWidth: {},
        saturate: {},
        sepia: {},
        skew: {},
        strokeWidth: {},
        transformOrigin: {},
        extend: {
            backdropBlur: {
                sm: '4px',
                md: '8px',
            },    
            gap: {
                '10': '10px', 
                '15': '15px', 
                '20': '20px', 
                '30': '30px', 
                '40': '40px', 
                '50': '50px', 
                '80': '80px', 
            }, 
            maxWidth: {
                auto: 'auto',
                container: '1400px',  
                480: '480px',
                952: '952px',
                1152: '1152px',
                1050: '1050px',                           
            },
            width: {
                0: '0px',
                4: '4px',
                15: '15px',
                20:'20px',
                25: '25px',
                40: '40px',
                44: '44px',
                45: '45px',
                48: '48px',
                50: '50px',
                150:'150px',
                '200pr':'200%',
                'calc-310':'calc(100% - 310px)',
            },
            height: {
                4: '4px',
                15: '15px',
                20: '20px',
                40: '40px',
                46:'46px',
                45: '45px',
                48: '48px',
                75: '75px',
                150: '150px',
                280: '280px',
                570:'570px',
                737: '737px',
                745:'745px',
                800: '800px',
                '200pr':'200%',
                '10_px': '10px', 
                '1.25': '1.25rem', 
                'menu_height':'calc(100vh - 174px)',
            },
            minHeight: {
                auto: 'auto',
                500: '500px',
            },
            backgroundOpacity: {
                '10': '0.1',
            },
            boxShadow: {
                'menuShadow': '0px 4px 20px 0px rgba(0, 0, 0, 0.20)',   
            },
            dropShadow: {
                'card_shad': '0px 4px 14px rgba(0, 0, 0, 0.14)',            
            },      
            maxHeight: {
                425: '425px',
            },
            gridTemplateColumns: {
                'half': '1fr 1fr',
                '800px_1fr': '800px 1fr',
            },
            screens: {
                xl: { 'min': '1200px' },
                large_desktop: { 'max': '1600px' },
                desktop2: { 'max': '1600px' },
                desktop: { 'max': '1499px' },
                1400: { 'max': '1400px' },
                laptop: { 'max': '1366px' }, 
                1299: { 'max': '1299px' },   
                xlscreen: { 'max': '1199.9px' },
                lgscreen: { 'max': '1024px' },
                lgscreentwo: { 'max': '1023px' },
                mdscreen2: { 'max': '991px' },  
                mdscreen: { 'max': '767px' },
                smscreen2: { 'max': '640px' },
                smscreen: { 'max': '575px' },
                xsscreen2: { 'max': '425px' },
                xsscreen: { 'max': '320px' },  
                maxscreen: { 'min': '2000px' }, 
                max_width_1200: {'raw': '(max-width: 1199.9px) and (min-width: 768px)'}, 
                max_width_1600: {'raw': '(max-width: 1600px) and (min-width: 1199.9px)'},
                1366: {'min': '1366px'},
                1500: {'min': '1500px'},
            }, 
            keyframes: {
                stickySlideDown: {
                  '0%': { transform: 'translateY(-100%)', opacity: '0.7' },
                  '100%': { transform: 'translateY(0)', opacity: '1' }
                } 
            },
            animation: {
                stickySlideDown: 'stickySlideDown 0.5s', 
            } 
        }
    },
    variantOrder: [

    ],
    variants: {
        // extend: {},
    },
    plugins: [
        // require('tailwindcss'),
        function ({ addComponents }) {
            addComponents({

                '.container-fluid': {
                    maxWidth: '100%',
                },


                '.container': {
                    maxWidth: '1400px',
                    '@screen 1366': {
                        maxWidth: '1280px',
                    },
                    '@screen 1500': {
                        maxWidth: '1440px',
                    },
                    '@screen laptop': {
                        maxWidth: '1140px',
                    },
                    '@screen lgscreen': {
                        maxWidth: '940px',  
                    },
                    '@screen mdscreen2': {
                        maxWidth: '850px',  
                    },   
                    '@screen smscreen2': {
                        maxWidth: '100%',   
                    },
                }
            })
        }

    ],
}