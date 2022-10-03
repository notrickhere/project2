const React = require('react')
const DefaultLayout = require('./layouts/Default')
class DunkLowShow extends React.Component {
    render() {
        const { dunkLow } = this.props;
        return (
            <DefaultLayout title={"Dunk Low Profile"}>
                <div className='showPage'>
                    <nav className='editPageNav'>
                        <a href="/dunkLow"> Back To Dunk Lows</a>
                        <br />
                        <a href="/"> Back To Home</a>
                    </nav>
                    <br />
                    <div className="dunkLowPicture pictureBox">

                    </div>
                    <div className= "">
                        Model: {dunkLow.colorWay}
                        <br />

                        Model: {dunkLow.price}
                        <br />

                        Is the shoe deadstock? {dunkLow.isDeadStock
                        ? "It's deadstock!"
                        : "It's not deadstock!"}
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}


module.exports = DunkLowShow