exports.id = 978;
exports.ids = [978];
exports.modules = {

/***/ 30977:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73235));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 47759));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 340))

/***/ }),

/***/ 49402:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7535))

/***/ }),

/***/ 95483:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 94564, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50885, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 80772, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 68262, 23))

/***/ }),

/***/ 10293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Airquality)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_AirRounded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73101);
/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82978);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50467);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);





function Airquality(props) {
    const qality = [
        [
            "Good",
            "A perfect day for walk"
        ],
        [
            "Fair",
            "there may be a risk for some people"
        ],
        [
            "Moderate",
            "Members of sensitive groups may experience health effects"
        ],
        [
            "Poor",
            "Some members of the general public may experience health effects"
        ],
        [
            "Very Poor",
            " The risk of health effects is increased for everyone"
        ]
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.data === undefined || null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "dark:bg-[#1E1E1E] mb-5 bg-white w-full mr-5 p-5 rounded-2xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "font-semibold dark:text-white",
                        children: "Air Quality Index"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "my-3 flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "my-auto ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_AirRounded__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: "text-4xl "
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm font-semibold dark:text-white",
                                    children: props.data?.list?.map((data)=>{
                                        return `${qality[data.main.aqi][0]}`;
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[10px] font-medium dark:text-slate-400",
                                    children: props.data?.list?.map((data)=>{
                                        return `${qality[data.main.aqi][1]}`;
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex w-full gap-3 overflow-hidden",
                    children: Object.keys(props.data.list.at(0).components).map((key, num)=>{
                        const data = Object.values(props.data.list.at(0).components);
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Skeleton__WEBPACK_IMPORTED_MODULE_2__/* .Aircard */ .Li, {
                            head: key,
                            value: data[num]
                        }, num);
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 73235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Clock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_LightModeOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85684);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_NightsStayOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52904);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Clock() {
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [param, setParam] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [morning, setMorning] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const date = new Date();
        setInterval(()=>{
            const date = new Date();
            setTime(`${Number(date.getHours()) % 12 >= 10 ? `${date.getHours() % 12}` : `0${date.getHours() % 12}`}:${Number(date.getMinutes()) >= 10 ? `${date.getMinutes()}` : `0${date.getMinutes()}`} ${Number(date.getHours) > 12 ? "AM" : "PM"}`);
            setMorning(`${Number(date.getHours) > 5 ? "Good Morning" : Number(date.getHours) < 12 ? "Good Afternoon" : "Good Evening"}`);
        }, 1000);
        setDate(`${weekday[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]} , ${date.getFullYear()}`);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        {
            params.slug !== undefined || null ? setParam(String(params.slug)) : setParam("Bangkok");
        }
    }, [
        params
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "my-8 w-[90%] mx-auto font-semibold text-indigo-500",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-5xl mb-1",
                    children: time
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-slate-800 mb-3",
                    children: date
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-2xl",
                    children: [
                        morning !== "Good Evening" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_LightModeOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            className: "mr-2 text-3xl"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_NightsStayOutlined__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            className: "mr-2 text-3xl"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "my-auto",
                            children: [
                                morning,
                                ",",
                                param === "" ? `Bangkok!` : ` ${param}!`,
                                " "
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 59646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Miniday)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41103);



function Miniday(props) {
    const main = props.data.weather?.map((data)=>{
        return data.main;
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "font-semibold w-28 rounded-2xl py-4 text-slate-800 flex flex-col bg-white dark:bg-[#1E1E1E]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mx-auto",
                    children: (0,_libs_type__WEBPACK_IMPORTED_MODULE_2__/* .pickture */ .f)(main[0], 60)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "mx-auto text-sm dark:text-white",
                    children: props.data.dt_txt.slice(10, 16)
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "mx-auto text-sm dark:text-white",
                    children: [
                        Math.floor(Number(props.data.main.temp) - 273),
                        "\xb0"
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 61730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Sevendays)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./app/libs/type.tsx + 6 modules
var type = __webpack_require__(41103);
;// CONCATENATED MODULE: ./app/components/Onlyoneday.tsx


function Onlyoneday(props) {
    const day = new Date(props.data.dt * 1000);
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const month = months[day.getMonth()];
    const date = day.getDate();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "py-[10px] flex flex-row w-full justify-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "dark:text-white",
                    children: date + month
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "dark:text-white",
                            children: (0,type/* pickture */.f)(props.data.weather[0].main, 30)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "my-auto mx-2 dark:text-white",
                            children: props.data.weather[0].main
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "dark:text-white",
                    children: [
                        Math.floor(props.data.main.temp_max - 273),
                        "\xb0/",
                        Math.floor(props.data.main.temp_min - 273),
                        "\xb0"
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/components/Sevendays.tsx


function Sevendays(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "h-[384px] w-full p-5 flex flex-col bg-white rounded-2xl dark:bg-[#1E1E1E]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "mb-5 font-semibold dark:text-white",
                    children: "5-Days Forcast"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: " divide-y dark:text-white",
                    children: props.data.map((data, num)=>{
                        if (num % 8 === 0) {
                            return /*#__PURE__*/ jsx_runtime_.jsx(Onlyoneday, {
                                data: data
                            }, num);
                        }
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 82978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Li: () => (/* binding */ Aircard),
/* harmony export */   O6: () => (/* binding */ Right),
/* harmony export */   rz: () => (/* binding */ Cardweatherload)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64085);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


function Cardweatherload() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-[90%] mx-auto animate-pulse",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full grid lg:grid-cols-7 md:grid-cols-5 grid-cols-3 h-32 gap-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-indigo-200 dark:bg-gray-700 rounded-xl"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-indigo-200 dark:bg-gray-700 rounded-xl"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-indigo-200 dark:bg-gray-700 rounded-xl"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-indigo-200 dark:bg-gray-700 rounded-xl hidden md:block "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-indigo-200 dark:bg-gray-700 rounded-xl hidden md:block"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-indigo-200 dark:bg-gray-700 rounded-xl hidden lg:block"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-indigo-200 dark:bg-gray-700 rounded-xl hidden lg:block"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "my-5 w-full h-full flex flex-col xl:flex-row",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-auto xl:w-[65%] ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full h-44 bg-indigo-200 dark:bg-gray-700 rounded-xl mb-5"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full h-44 bg-indigo-200 dark:bg-gray-700 rounded-xl"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full xl:ml-5 h-92 mt-5 xl:mt-0 bg-indigo-200 dark:bg-gray-700 rounded-xl"
                        })
                    ]
                })
            ]
        })
    });
}
function Right() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "animate-pulse",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-3/4 mx-auto my-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                    height: 70
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-3/4 h-[390px] dark:bg-gray-700 bg-gray-200 mx-auto rounded-xl"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-3/4 mx-auto my-5 h-48 dark:bg-gray-700 rounded-xl bg-gray-200"
            })
        ]
    });
}
function Aircard(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "rounded-md bg-emerald-100 w-12 text-xs py-4 flex flex-col dark:bg-slate-600",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "mx-auto font-semibold dark:text-white",
                children: props.head
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mx-auto font-medium dark:text-white",
                children: props.value
            })
        ]
    });
}


/***/ }),

/***/ 60328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Sun)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_PlaceOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36605);
/* harmony import */ var _mui_icons_material_NightsStayOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52904);
/* harmony import */ var _mui_icons_material_LightModeOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85684);




function Sun(props) {
    const unix = (unix_timestamp)=>{
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        let date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        let hours = date.getHours();
        // Minutes part from the timestamp
        const minutes = date.getMinutes();
        // Will display time in 10:30:23 format
        var formattedTime = `${Number(hours) % 12 >= 10 ? `${hours % 12}` : `0${hours % 12}`}` + ":" + `${minutes >= 10 ? `${minutes}` : `0${minutes}`}` + `${Number(hours) > 12 ? "AM" : "PM"}`;
        return formattedTime;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.data === undefined || null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "p-5 bg-white rounded-2xl dark:bg-[#1E1E1E]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mb-3 font-semibold dark:text-white",
                    children: "Sunrise & Sunset"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-orange-100 p-3 rounded-xl dark:bg-[#303030]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex mb-2 dark:text-white",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_PlaceOutlined__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    className: "text-[20px] dark:text-white"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "my-auto text-sm dark:text-white",
                                    children: props.data.city.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-2 ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_LightModeOutlined__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            className: "my-auto text-4xl mr-2 dark:text-white"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm dark:text-white",
                                                    children: "Sunrise"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    className: "dark:text-white",
                                                    children: [
                                                        unix(props.data.city.sunrise),
                                                        " "
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex dark:text-white",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_NightsStayOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            className: "my-auto text-4xl mr-2 dark:text-white"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm dark:text-white",
                                                    children: "Sunset"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    className: "dark:text-white",
                                                    children: [
                                                        unix(props.data.city.sunrise),
                                                        " "
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 47759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Locata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/PlaceOutlined.js
var PlaceOutlined = __webpack_require__(36605);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/LightMode.js
var LightMode = __webpack_require__(12008);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/DarkMode.js
var DarkMode = __webpack_require__(29132);
;// CONCATENATED MODULE: ./app/components/Searchbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Searchbar() {
    const router = (0,navigation.useRouter)();
    const [mode, setMode] = (0,react_.useState)("light");
    const [search, setSearch] = (0,react_.useState)("");
    const submitsearch = async (e)=>{
        await e.preventDefault();
        router.push(`/location/${search}`);
    };
    (0,react_.useEffect)(()=>{
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setMode("dark");
        }
    }, []);
    (0,react_.useEffect)(()=>{
        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [
        mode
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-between mx-auto py-8 w-3/4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row bg-indigo-100 rounded-xl p-2 w-[65%]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "my-auto relative bg-transparent ml-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "m-auto rounded-2xl border-[2px] border-indigo-400 p-[8px]"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute -right-1 bottom-0 rounded-xl border-[2px] border-indigo-400 p-[1px]"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("form", {
                            onSubmit: submitsearch,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                className: "text-indigo-400 outline-0 placeholder:text-indigo-400 bg-transparent ml-4 w-full",
                                placeholder: "Search..."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PlaceOutlined/* default */.Z, {
                            className: "m-auto rounded-2xl mr-1 p-1  bg-white text-indigo-400 w-6 h-6 text-xs cursor-pointer",
                            onClick: submitsearch
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex my-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "",
                            children: mode === "light" ? /*#__PURE__*/ jsx_runtime_.jsx(LightMode/* default */.Z, {
                                className: "text-3xl text-indigo-300 cursor-poiter my-auto",
                                onClick: ()=>{
                                    setMode(mode === "light" ? "dark" : "light");
                                }
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(DarkMode/* default */.Z, {
                                className: "text-3xl text-indigo-300 my-auto",
                                onClick: ()=>{
                                    setMode(mode === "light" ? "dark" : "light");
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "ml-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                alt: "",
                                width: 35,
                                height: 35,
                                src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
                                className: "rounded-lg"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/icons-material/WaterDropOutlined.js
var WaterDropOutlined = __webpack_require__(33155);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/AirRounded.js
var AirRounded = __webpack_require__(73101);
// EXTERNAL MODULE: ./app/libs/type.tsx + 6 modules
var type = __webpack_require__(41103);
;// CONCATENATED MODULE: ./app/components/Cardweather.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Cardweather(props) {
    const date = new Date;
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: props.currentdata === undefined || null ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "overflow-hidden px-8 py-8 bg-gradient-to-t from-indigo-500 to-indigo-300 w-3/4 mx-auto rounded-xl text-white relative dark:bg-[#121212]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "z-30 -top-5 -right-5 w-20 h-20 absolute bg-yellow-300 rounded-full "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "z-20 w-28 h-28 -top-9 -right-9 absolute bg-slate-100/[.3] rounded-full"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "z-20 w-36 h-36 -top-[48px] -right-[48px] absolute bg-slate-50/[.2] rounded-full"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(PlaceOutlined/* default */.Z, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: props.currentdata.name
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        (0,type/* pickture */.f)(props.currentdata.weather[0].main, 100),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "my-2 mx-auto text-sm",
                            children: [
                                "Today,",
                                date.getDate(),
                                " ",
                                month[date.getMonth()]
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-4 mx-auto relative text-7xl font-semibold",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: Math.floor(Number(props.currentdata.main.temp) - 273)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute  rounded-full border-[6px] p-1 border-white top-0 -right-4"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "mx-auto mb-3",
                            children: props.currentdata.weather[0].main
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex text-xs flex-col mx-auto justify-center align-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-2 divide-x-2 w-48",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: " ml-auto mr-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(AirRounded/* default */.Z, {
                                                    className: "my-auto mr-1"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "my-auto ",
                                                    children: "Wind"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "my-auto  ",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "ml-3 flex flex-row",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: "mr-1",
                                                        children: [
                                                            props.currentdata.wind.speed,
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Knot"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-2 divide-x-2 w-48",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: " mr-3 ml-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(WaterDropOutlined/* default */.Z, {
                                                    className: "my-auto mr-1"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "my-auto ",
                                                    children: "Hum"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "my-auto ",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "ml-3",
                                                children: [
                                                    props.currentdata.main.humidity,
                                                    " %"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/components/Minicrad.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Minicrad(props) {
    const direction = [
        "N",
        "NE",
        "E",
        "SE",
        "S",
        "SW",
        "W",
        "NW"
    ];
    function direct(num) {
        return num < 45 ? 0 : num < 90 ? 1 : num < 135 ? 2 : num < 180 ? 3 : num < 225 ? 4 : num < 270 ? 5 : num < 315 ? 6 : 7;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: props.currentdata === undefined || null ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `flex flex-col text-white w-3/4 mx-auto flex ${props.color} rounded-xl my-5 p-5 h-[200px] dark:bg-[#121212]`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(AirRounded/* default */.Z, {
                            className: "my-auto mr-2"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Wind Direction"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative outline outline-offset-2 outline-8 flex text-xs flex-col rounded-full w-28 h-28 m-auto align-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col m-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "m-auto text-5xl font-bold",
                                    children: direction[direct(props.currentdata.wind.deg)]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "mx-auto",
                                    children: [
                                        props.currentdata.wind.speed,
                                        " Knot"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `absolute w-full h-full top-0 left-0 arrow ${direction[direct(props.currentdata.wind.deg)].toLowerCase()}`
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./app/components/Skeleton.tsx
var Skeleton = __webpack_require__(82978);
;// CONCATENATED MODULE: ./app/components/locata.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Locata() {
    const params = (0,navigation.useParams)();
    const [load, setLoad] = (0,react_.useState)(true);
    const [data, setData] = (0,react_.useState)();
    (0,react_.useEffect)(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.slug === undefined ? "Bangkok" : `${params.slug}`}&appid=${"ec7ef657468c48e95fc618f0d1681680"}`).then((res)=>res.json()).then((data)=>{
            setData(data);
            setLoad(false);
        });
    }, [
        params
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            load && /*#__PURE__*/ jsx_runtime_.jsx(Skeleton/* Right */.O6, {}),
            !load && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Searchbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Cardweather, {
                        currentdata: data
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Minicrad, {
                        color: "bg-gradient-to-l from-[#fe1d91] to-[#ff7bbf] ",
                        currentdata: data
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 7535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function error() {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "h-1/2 flex flex-col",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "m-auto flex flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mx-auto text-3xl font-extrabold ",
                        children: "Error !"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "mx-auto",
                        children: [
                            "please ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "cursor-pointer underline underline-offset-2 hover:text-indigo-800 ",
                                onClick: ()=>{
                                    router.refresh();
                                },
                                children: "Click"
                            }),
                            " for try agian"
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 41103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ pickture)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/clouds.png
/* harmony default export */ const clouds = ({"src":"/_next/static/media/clouds.c5055720.png","height":224,"width":224,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4ElEQVR42nXMTWrCQBwF8H/soqW0uOs5uukBeoOuuuoJepAuunDhKQQRXCgqioFRwS8kYhTxGzQTDDFDMomZiPCXQUE3/uDxNo8HEuNBDC54+fcBbonooMgm+iSuofN6RPUpQv1xYRWvwyDwPyxfhGxMSKQC8Qc/fxgmXyqN3PnZ9rjaMhn2mnk8ZAGD+jtS/f8TpM7GequtzF11QTE/N8R22t2bWgHTg1E/MdvF5UbRqJ0ymIfUcZGJI67dEMmSDiFTfgYpFNEX34u25fKS48n4bWqzb5A2zFPgjsbSiJ0AENOGx+0n1bwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/rain.png
/* harmony default export */ const rain = ({"src":"/_next/static/media/rain.c82d1474.png","height":224,"width":224,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzklEQVR42m2PPw4BQRTGd1alpqCh2HAChQuIuIBCoZKQOIJK4g5O4AgOoOQACkv8KWwUs8TuyMzsmM8LyVRe8hUv3y+/l+fhPGLen9lx+G6xl3ETp+4S5357e0drz7OGRxPG9gfh1Fub2wLp66H2MbDjVlNZdwYTzQdCSTw1cIgtAQABq28pn6EfAXmhzTCRekqGCQEzAjrOIKQIUiVLL20KZCgSUKAz5ZDbnJdq46cqqwqdBYkyQchBsTVKxRkIYvptWJRYtrmCHe/Wvf4BJe+NxKhNqR8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/clear.png
/* harmony default export */ const clear = ({"src":"/_next/static/media/clear.9ae1bae0.png","height":224,"width":224,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAhFBMVEX//wD+/wD80Dn+1Qb90hL+1AD+0gr91AD90gr+0wD90Qr9yyP90QP90Aj9yyH9yiP+zwD9uDz9mjv9mjr9sy3+1gD+1QD+7AD+6AD+4wD96wL+6gD+5AD+4wD+2gD+2QD9uzn9uzf9ujn9uDP9tSr+rwj9rxL+rQD8tEP8s0H9sTz9rjQqLJVdAAAAKXRSTlMAAAAAAAAAAAAAAAAAAAAAAAEBAQIDBBERERISExMrKz09P0BEREZG/aJCyToAAABESURBVHjaBYCFEYAgAADfROzEFjv338/DEwGYMkRUtANKEKPnTWcRtMv9HjUwrs93dQaJMe3nVPg4qmz6XElcKwVbhj+ZjQRiDAnTmQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/mist.png
/* harmony default export */ const mist = ({"src":"/_next/static/media/mist.4be4e0dc.png","height":224,"width":224,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6UlEQVR42mMAgb8XchkZoODnyQz+H0fTeRnQwf+9DOz/zzjw/rxWb/jnbpX8r/MFej/P5Ysw3HnxkYUBCO7cuSH/9WJT2K91fJ5ftsTn/zqXZ/3rcikrAwjcfv3L6+abv3/PPft7+sOW/M/f1jn//7w5Kfz3lWJfoORvk1uv/9y7/eb3/1uvf/+/9uzb/ydHVt//v4HB/c3ns9wMQMn/EMk/f4H0v9tv//4/+/r/w4e3TmT8P8mgBVKw99YbkOSfn0D2rztvfn+7/vLX/8NP/kczAAFIARNQgRYMAxXqXHr+RwUk9/9aNCMABSSb+NiWG3gAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/drizzle.png
/* harmony default export */ const drizzle = ({"src":"/_next/static/media/drizzle.85017ffc.png","height":224,"width":224,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3klEQVR42mOAgbddKixPa7g4b26ay8yADj6tseP/diza5cuh2OyPyxgsPyxk4GWAgacMDIxfDsRb/boed/3HUaf/73fnHXi+sVgBJHfvyAZmhmfzl7L+OMTg9PNqytdPt7f/v3Xt5v/zF6+fenrnJivCinPzHN88f/rk9bvv/2/cfPDjwoWr/y9dur6BAQZevfmS/Or1x/9vXr//f+vm3f9QBfeuXL7OxgAC/98fZnn87L3zuXvfJq4//m7ymgPPKr4+PcrPAAI3Hn1hZIACwQ3/uRlm/+eB8Xcef8QEAPbPedyldTBQAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/snow.png
/* harmony default export */ const snow = ({"src":"/_next/static/media/snow.b461a50b.png","height":224,"width":224,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAsklEQVR42mMAgXvv/zLe//CPhQEJHH4I5V9//Y8RJrj51r+AAw/+VSMpYgIzVlz5w/b407+Zt9/9+3/o4b//++7/O3P00X9/uHGPPv479PzLv/+vvv37/+Lrv/+XX/77DzRpE1zBw4//soGSq19+/b/wxZd/69/++JcMEv///z8jXNGzz//Mn37+r/v403+dp5//WZ588p8XLnnm2T+eBx/+KwJNkgJhoI8UgA7kYiAGAAB8M3F1PrcIXQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/libs/type.tsx








function pickture(weather, lenght) {
    if (weather === "Mist") {
        console.log("mist");
        return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            width: lenght,
            height: lenght,
            className: "mx-auto",
            alt: "",
            src: mist
        });
    } else if (weather === "Rain") {
        return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            width: lenght,
            height: lenght,
            className: "mx-auto",
            alt: "",
            src: rain
        });
    } else if (weather === "Drizzle") {
        return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            width: lenght,
            height: lenght,
            className: "mx-auto",
            alt: "",
            src: drizzle
        });
    } else if (weather === "Clouds") {
        return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            width: lenght,
            height: lenght,
            className: "mx-auto",
            alt: "",
            src: clouds
        });
    } else if (weather === "Snow") {
        return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            width: lenght,
            height: lenght,
            className: "mx-auto",
            alt: "",
            src: snow
        });
    } else if (weather === "Clear") {
        return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            width: lenght,
            height: lenght,
            className: "mx-auto",
            alt: "",
            src: clear
        });
    } else if (weather === null || undefined) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    }
}


/***/ }),

/***/ 95863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   useWindowSize: () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Miniday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59646);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7653);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50467);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Airquality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10293);
/* harmony import */ var _components_Sun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60328);
/* harmony import */ var _components_Sevendays__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61730);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82978);
/* __next_internal_client_entry_do_not_use__ default,useWindowSize auto */ 








function Home() {
    const [sevenhour, setSevenhour] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const [airpol, setAirpol] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)();
    const [lood, setlood] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true);
    const size = useWindowSize();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${"ec7ef657468c48e95fc618f0d1681680"}`).then((res)=>res.json()).then((data)=>{
            setSevenhour(data);
            return data;
        }).then((data)=>{
            return data.city.coord;
        }).then((coord)=>fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=${"ec7ef657468c48e95fc618f0d1681680"}`)).then((data)=>data.json()).then((data)=>{
            setAirpol(data);
            setlood(false);
        }).catch((err)=>{
            setlood(true);
            alert(err);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            lood && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skeleton__WEBPACK_IMPORTED_MODULE_8__/* .Cardweatherload */ .rz, {}),
            !lood && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-[90%] mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
                        className: "",
                        spaceBetween: 5,
                        slidesPerView: size.width < 500 ? 3 : size.width < 1200 ? 5 : 7,
                        onSlideChange: ()=>console.log("slide change"),
                        onSwiper: (swiper)=>console.log(swiper),
                        children: sevenhour?.list?.map((num, number)=>{
                            if (number < 7) {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Miniday__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        data: num
                                    }, number)
                                }, number);
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "my-5 w-full flex flex-col xl:flex-row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-auto xl:w-[65%] ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Airquality__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        data: airpol
                                    }),
                                    sevenhour !== null || undefined ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sun__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        data: sevenhour
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full xl:mx-5 h-full mt-5 xl:mt-0",
                                children: sevenhour !== null || undefined ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sevendays__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    data: sevenhour.list
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
        width: 0,
        height: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return ()=>window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}


/***/ }),

/***/ 94363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17814);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Acer\Desktop\coding\weatherApp\my-app\app\error.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 66637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(72981);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(92817);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./app/components/Clock.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Acer\Desktop\coding\weatherApp\my-app\app\components\Clock.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Clock = (__default__);
// EXTERNAL MODULE: ./node_modules/react-loading-skeleton/dist/index.js
var dist = __webpack_require__(1251);
;// CONCATENATED MODULE: ./app/components/locata.tsx

const locata_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Acer\Desktop\coding\weatherApp\my-app\app\components\locata.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: locata_esModule, $$typeof: locata_$$typeof } = locata_proxy;
const locata_default_ = locata_proxy.default;


/* harmony default export */ const locata = (locata_default_);
;// CONCATENATED MODULE: ./app/layout.tsx






const metadata = {
    title: "Weather APP",
    description: "Weather App by peerapat"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: `${(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx(dist/* SkeletonTheme */.yB, {
                baseColor: "#202020",
                highlightColor: "#444",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full h-screen grid lg:grid-cols-[minmax(800px,100%)_minmax(350px,450px)] grid-cols-1 ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "bg-indigo-50 h-full dark:bg-[#121212] order-last lg:order-first",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Clock, {}),
                                children
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bg-white h-full dark:bg-[#1E1E1E]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(locata, {})
                        })
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 83174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49984);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 92817:
/***/ (() => {



/***/ })

};
;