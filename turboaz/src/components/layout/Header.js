import React from 'react';
import '../../assets/css/layout/header.scss';

function Header() {
    return (
        <div>
            <div className='header mt-2'>
                <div className="container headercontain">
                    <span>Dəstək xidməti: (012) 599-08-01; (012) 505-77-55</span>
                    <div className='mt-2'>
                        <span><i className="fas fa-heart"></i>Seçilmişlər</span>
                        <span><i className="fas fa-user"></i>Giriş</span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Header