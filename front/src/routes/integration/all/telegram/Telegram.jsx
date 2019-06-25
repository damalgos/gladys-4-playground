import { Text, MarkupText } from 'preact-i18n';
import { TelegramSaveApiKeyStatus } from '../../../../utils/consts';

const TelegramPage = ({ children, ...props }) => (
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <div class="dimmer">
                    <div class="dimmer-content">
                      <h2>
                        <Text id="integration.telegram.title" />
                      </h2>
                      <p>
                        <MarkupText id="integration.telegram.introduction" />
                      </p>
                      <div class="form-group">
                        <div class="form-label">Telegram Bot API Key</div>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Telegram Bot API Key"
                            onInput={props.updateTelegramApiKey}
                          />
                          <span class="input-group-append">
                            <button
                              class={
                                props.telegramSaveApiKeyStatus === TelegramSaveApiKeyStatus.Saving
                                  ? 'btn btn-primary btn-loading'
                                  : 'btn btn-primary'
                              }
                              onClick={props.saveTelegramApiKey}
                              type="button"
                            >
                              Save
                            </button>
                          </span>
                        </div>
                      </div>
                      <p>
                        <MarkupText
                          id="integration.telegram.link"
                          fields={{
                            link: 'https://telegram.org'
                          }}
                        />{' '}
                        <Text id="integration.telegram.note" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TelegramPage;
