const STATE = {
  ON: 1,
  OFF: 0,
};

const USER_ROLE = {
  ADMIN: 'admin',
  HABITANT: 'habitant',
  GUEST: 'guest',
};

const AVAILABLE_LANGUAGES = {
  EN: 'en',
  FR: 'fr',
};

const SESSION_TOKEN_TYPES = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
};

const EVENTS = {
  USER_SLEEP: {
    TIME_TO_WAKE_UP: 'user.time-to-wake-up',
    CANCELED_WAKE_UP: 'user.canceled-wake-up',
    WOKE_UP: 'user.woke-up',
    FELL_ASLEEP: 'user.fell-asleep',
    CANCELED_SLEEP: 'user.canceled_sleep',
    TIME_TO_SLEEP: 'user.time-to-sleep',
  },
  USER_PRESENCE: {
    LEFT_HOME: 'user.left-home',
    BACK_HOME: 'user.back-home',
    SEEN_AT_HOME: 'user.seen-at-home',
  },
  USER_WORK: {
    TIME_TO_GO_TO_WORK: 'user.time-to-go-to-work',
    CANCELED_GOING_TO_WORK: 'user.canceled-going-to-work',
    ARRIVED_AT_WORK: 'user.arrived-at-work',
    TIME_TO_LEAVE_WORK: 'user.time-to-leave-work',
    CANCELED_LEAVING_WORK: 'user.canceled-leaving-work',
  },
  HOUSE_ALARM: {
    ATTEMPTED_TO_ARM: 'house.attempted-to-arm',
    ARMED: 'house.armed',
    FAILED_TO_ARM: 'house.failed-to-arm',
    ATTEMPTED_TO_DISARM: 'house.attempted-to-disarm',
    FAILED_TO_DISARM: 'house.failed-to-disarm',
    TRIGGERED: 'house.triggered',
    TRIGGERED_STOPPED: 'house.triggered-stopped',
    DISARMED: 'house.disarmed',
  },
  SUN: {
    SUNSET: 'sun.sunset',
    SUNRISE: 'sun.sunrise',
  },
  SCENE: {
    TRIGGERED: 'scene.triggered',
    SUCCEEDED: 'scene.succeeded',
    FAILED: 'scene.failed',
  },
  ACTION: {
    TRIGGERED: 'action.triggered',
  },
  LIGHT: {
    TURNED_ON: 'light.turned-on',
    TURNED_OFF: 'light.turned-off',
    BRIGHTNESS_CHANGED: 'light.brightness-changed',
    HUE_CHANGED: 'light.hue-changed',
    SATURATION_CHANGED: 'light.saturation-changed',
  },
  SENSOR: {
    STATE_CHANGED: 'sensor.state-changed',
  },
  TEMPERATURE_SENSOR: {
    TEMPERATURE_CHANGED: 'temperature.changed',
  },
  SCHEDULED_SCENE: {
    ENABLED: 'scheduled-scene.enabled',
    DISABLED: 'scheduled-scene.disabled',
    TRIGGERED: 'scheduled-scene.triggered',
  },
};

const LIFE_EVENTS = {
  USER_SLEEP: EVENTS.USER_SLEEP,
  USER_PRESENCE: EVENTS.USER_PRESENCE,
  USER_WORK: EVENTS.WORK,
};

const STATES = {
  USER_SLEEP: {
    ASLEEP: 'user.asleep',
    NEED_TO_WAKE_UP: 'user.need-to-wake-up',
    AWAKE: 'user.awake',
    NEED_TO_SLEEP: 'user.need-to-sleep',
  },
  USER_PRESENCE: {
    AT_HOME: 'user.at-home',
    OUT: 'user.out',
  },
  USER_WORK: {
    NOT_AT_WORK: 'user.not-at-work',
    NEED_TO_GO_TO_WORK: 'user.need-to-go-to-work',
    AT_WORK: 'user.at-work',
    NEED_TO_LEAVE_WORK: 'user.need-to-leave-work',
  },
  HOUSE_ALARM: {
    DISARMED: 'house.alarm.disarmed',
    TRYING_TO_ARM: 'house.alarm.trying-to-arm',
    ARMED: 'house.alarm.armed',
    TRYING_TO_DISARM: 'house.alarm.trying-to-disarm',
    TRIGGERED: 'house.alarm.triggered',
  },
};

const CONDITIONS = {
  USER_SLEEP: {
    IS_ASLEEP: 'user.is-asleep',
    IS_AWAKE: 'user.is-awake',
    NEED_TO_WAKE_UP: 'user.need-to-wake-up',
    NEEED_TO_SLEEP: 'user.need-to-sleep',
  },
  USER_PRESENCE: {
    IS_AT_HOME: 'user.is-at-home',
    IS_OUT: 'user.is-out',
  },
  USER_WORK: {
    IS_NOT_AT_WORK: 'user.is-not-at-work',
    NEED_TO_GO_TO_WORK: 'user.need-to-go-to-work',
    IS_AT_WORK: 'user.is-at-work',
    NEED_TO_LEAVE_WORK: 'user.need-to-leave-work',
  },
  HOUSE_ALARM: {
    IS_DISARMED: 'house.alarm.is-disarmed',
    IS_TRYING_TO_ARM: 'house.alarm.is-trying-to-arm',
    IS_ARMED: 'house.alarm.is-armed',
    IS_TRYING_TO_DISARM: 'house.alarm.is-trying-to-disarm',
    IS_TRIGGERED: 'house.alarm.is-triggered',
  },
};

const ACTIONS = {
  LIGHT: {
    TURN_ON: 'light.turn-on',
    TURN_OFF: 'light.turn-off',
    CHANGE_BRIGHTNESS: 'light.change-brightness',
    CHANGE_HUE: 'light.change-hue',
    CHANGE_SATURATION: 'light.change-saturation',
  },
  HOUSE_ALARM: {
    ARM: 'house.alarm.arm',
    DISARM: 'house.alarm.disarm',
    TRIGGER: 'house.alarm.trigger',
  },
  USER_PRESENCE: {
    SET_AWAY: 'user.event.set-away',
    SET_AT_HOME: 'user.event.set-at-home',
  },
  TIME: {
    DELAY: 'delay',
  },
  SERVICE: {
    START: 'service.start',
    STOP: 'service.stop',
  },
};

const INTENTS = {
  LIGHT: {
    TURN_ON: 'intent.light.turn-on',
  },
};

const DEVICE_FEATURE_CATEGORIES = {
  LIGHT: 'light',
};

const DEVICE_FEATURE_TYPES = {
  LIGHT: {
    BINARY: 'binary',
    BRIGHTNESS: 'brightness',
    HUE: 'hue',
    SATURATION: 'saturation',
  },
};

const ACTIONS_STATUS = {
  PENDING: 'pending',
  SUCCESS: 'success',
  FAILED: 'failed',
};

const DEVICE_POLL_FREQUENCIES = {
  EVERY_MINUTES: 60 * 1000,
};

const createList = (obj) => {
  const list = [];
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object') {
      Object.keys(obj[key]).forEach((secondKey) => {
        list.push(obj[key][secondKey]);
      });
    } else {
      list.push(obj[key]);
    }
  });
  return list;
};

// build lists from object
const EVENT_LIST = createList(EVENTS);
const LIFE_EVENT_LIST = createList(LIFE_EVENTS);
const ACTION_LIST = createList(ACTIONS);
const CONDITION_LIST = createList(CONDITIONS);
const DEVICE_FEATURE_CATEGORIES_LIST = createList(DEVICE_FEATURE_CATEGORIES);
const DEVICE_FEATURE_TYPES_LIST = createList(DEVICE_FEATURE_TYPES);
const USER_ROLE_LIST = createList(USER_ROLE);
const AVAILABLE_LANGUAGES_LIST = createList(AVAILABLE_LANGUAGES);
const SESSION_TOKEN_TYPE_LIST = createList(SESSION_TOKEN_TYPES);

module.exports.STATE = STATE;
module.exports.EVENTS = EVENTS;
module.exports.LIFE_EVENTS = LIFE_EVENTS;
module.exports.STATES = STATES;
module.exports.CONDITIONS = CONDITIONS;
module.exports.ACTIONS = ACTIONS;
module.exports.INTENTS = INTENTS;
module.exports.DEVICE_FEATURE_CATEGORIES = DEVICE_FEATURE_CATEGORIES;
module.exports.DEVICE_FEATURE_TYPES = DEVICE_FEATURE_TYPES;
module.exports.ACTIONS_STATUS = ACTIONS_STATUS;
module.exports.USER_ROLE = USER_ROLE;
module.exports.AVAILABLE_LANGUAGES = AVAILABLE_LANGUAGES;
module.exports.SESSION_TOKEN_TYPES = SESSION_TOKEN_TYPES;

module.exports.EVENT_LIST = EVENT_LIST;
module.exports.LIFE_EVENT_LIST = LIFE_EVENT_LIST;
module.exports.ACTION_LIST = ACTION_LIST;
module.exports.CONDITION_LIST = CONDITION_LIST;
module.exports.DEVICE_FEATURE_CATEGORIES_LIST = DEVICE_FEATURE_CATEGORIES_LIST;
module.exports.DEVICE_FEATURE_TYPES_LIST = DEVICE_FEATURE_TYPES_LIST;
module.exports.USER_ROLE_LIST = USER_ROLE_LIST;
module.exports.AVAILABLE_LANGUAGES_LIST = AVAILABLE_LANGUAGES_LIST;
module.exports.SESSION_TOKEN_TYPE_LIST = SESSION_TOKEN_TYPE_LIST;

module.exports.DEVICE_POLL_FREQUENCIES = DEVICE_POLL_FREQUENCIES;
module.exports.DEVICE_POLL_FREQUENCIES_LIST = createList(DEVICE_POLL_FREQUENCIES);
