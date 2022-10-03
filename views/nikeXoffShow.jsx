const React = require('react')
const DefaultLayout = require('./layouts/Default')
class nikeXoffShow extends React.Component {
    render() {
        const { nikeXoff } = this.props;
        return (
            <DefaultLayout title={"Off-White Profile"}>
                <div className='showPage'>
                    <nav className='editPageNav'>
                        <a href="/nikeXoff"> Back To Off-White</a>
                        <br />
                        <a href="/"> Back To Home</a>
                    </nav>
                    <br />
                    <div className="nikeXoffPicture pictureBox">

                    </div>
                    <div className= "">
                        Model: {nikeXoff.colorWay}
                        <br />

                        Model: {nikeXoff.price}
                        <br />

                        Is the shoe deadstock? {nikeXoff.isDeadStock
                        ? "It's deadstock!"
                        : "It's not deadstock!"}
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}


module.exports = nikeXoffShow