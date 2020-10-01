
export const UrlTable = [
  {id: '0', department: 'automotive', slug: 'xtreme-living-pump-hand-aluminium-body'},
  {id: '1', department: 'automotive', slug: 'mini-bluetooth-obd2-elm-327-vehicle-diagnostic-scanner'},
  {id: '2', department: 'automotive', slug: 'shield-diesel-injector-cleaner-350ml'},
  {id: '3', department: 'automotive', slug:'car-parking-sensor-assistant'},
  {id: '4', department: 'automotive', slug: 'moto-quip-in-line-fuse-holder'}
]


// mini-bluetooth-obd2-elm-327-vehicle-diagnostic-scanner

/*
export const dataSource = [

  {
    department: "automotive",
    products: [

    ]
  }, {
    department: "babyTodler",
    products: [{

    }]
  },{
    department: "beauty",
    products: [{

    }]
  },{
    department: "booksCourses",
    products: [{

    }]
  },{
    department: "campingOutdoor",
    products: [{

    }]
  }
]

*/

export function string_to_slug (str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}
