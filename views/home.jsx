const React = require('react')
const DefaultLayout = require('./layouts/Default')
class home extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div className="welcome">
                    <h1>Welcome to Hyper Wears!</h1>
                </div>
                <div className="homeCategories">
                    <div className="dunkLowBox">
                        <div className="dunkLowHomePic pictureBox">

                        </div>
                        <a href='/dunkLow'><h2>Dunk Lows</h2></a>
                    </div>

                    <div className="jordan1Box">
                        <div className="jordan1HomePic pictureBox">

                        </div>
                        <a href='/jordan1'><h2>Jordan 1's</h2></a>
                    </div>

                    <div className="jordan3Box">
                        <div className="jordan3HomePic pictureBox">

                        </div>
                        <a href='/jordan3'><h2>Jordan 3's</h2></a>
                    </div>

                    <div className="jordan4Box">
                        <div className="jordan4HomePic pictureBox">

                        </div>
                        <a href='/jordan4'><h2>Jordan 4's</h2></a>
                    </div>

                    <div className="nikeXoffBox">
                        <div className="nikeXoffHomePic pictureBox">

                        </div>
                        <a href='/nikeXoff'><h2>Nike X Off-White</h2></a>
                    </div>
                </div>

                    
            </DefaultLayout>
        )
    }
}

module.exports = home