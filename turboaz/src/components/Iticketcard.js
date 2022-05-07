import React from 'react'
import '../assets/css/iticketcard.scss'
function Iticketcard() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-4">
                    <a href="/events/concerts/sagopa-kajmer" class="event-list-item tns-item" target="" aria-hidden="true" tabindex="-1">
                        <div class="relative h-full">
                            <div class="image">
                                <img src="https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg" data-src="https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg" alt="SAGOPA KAJMER" class="bg ls-is-cached lazyloaded" />
                                <img src="https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png" data-src="https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png" alt="SAGOPA KAJMER" class=" ls-is-cached lazyloaded" />
                                <span class="btn"><span class="price">40 ₼</span>-dan</span>
                            </div>
                            <div class="info">
                                <div class="event-name">
                                    SAGOPA KAJMER
                                </div>
                                <div class="flex w-full items-center flex-1">
                                    <div class="event-date">
                                        10 iyun 2022
                                    </div>
                                    <span class="separator">
                                        •
                                    </span>
                                    <div class="venue-name">
                                        Elektra Events Hall
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    );

}

export default Iticketcard