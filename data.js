var APP_DATA = {
  "scenes": [
    {
      "id": "0-bayankhongor-county",
      "name": "Bayankhongor county",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1211668511375485,
          "pitch": 0.12764233535132163,
          "rotation": 0,
          "target": "1-altay-tavan-bogd-mountain"
        },
        {
          "yaw": -3.1294829317001813,
          "pitch": -0.08758780489041484,
          "rotation": 0,
          "target": "2-ulaagchyn-black-lake"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-altay-tavan-bogd-mountain",
      "name": "Altay Tavan Bogd Mountain",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 504,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1327588836430493,
          "pitch": 0.030795848688180527,
          "rotation": 0,
          "target": "2-ulaagchyn-black-lake"
        },
        {
          "yaw": -3.1313411310972015,
          "pitch": 0.2534269481368856,
          "rotation": 0,
          "target": "0-bayankhongor-county"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ulaagchyn-black-lake",
      "name": "Ulaagchyn Black Lake",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 504,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.125817164477814,
          "pitch": 0.08959796348622717,
          "rotation": 0,
          "target": "0-bayankhongor-county"
        },
        {
          "yaw": -3.1375753990422304,
          "pitch": 0.3494807412586596,
          "rotation": 0,
          "target": "1-altay-tavan-bogd-mountain"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Gigapixel Panorama BSA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
