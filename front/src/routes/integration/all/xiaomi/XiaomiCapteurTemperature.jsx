import { Text, Localizer } from 'preact-i18n';
import cx from 'classnames';
import XiaomiCapteurTemperatureBox from './XiaomiCapteurTemperatureBox';
import { RequestStatus } from '../../../../utils/consts';
import style from './style.css';

const XiaomiCapteurTemperature = ({ children, ...props }) => (
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header">
                  <h1 class="card-title">
                    <Text id="integration.xiaomi.title" />
                  </h1>
                </div>
                <card-body>
                  <div class={cx('dimmer-content', style.xiaomiListBody)}>
                    <div class="row my-4 mx-2">
                      {props.xiaomiCapteurTemperature &&
                        props.xiaomiCapteurTemperature.map((capteur, index) => (
                          <XiaomiCapteurTemperatureBox
                            capteur={capteur}
                            capteurIndex={index}
                            updateCapteurField={props.updateCapteurField}
                            saveCapteur={props.saveCapteur}
                            houses={props.houses}
                          />
                        ))}
                    </div>
                  </div>
                </card-body>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default XiaomiCapteurTemperature;