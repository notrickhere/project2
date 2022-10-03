const React = require('react')
const DefaultLayout = require('./layouts/Default')
class nikeXoffIndex extends React.Component {
    render() {
        const { nikeXoff } = this.props
        return (
            <DefaultLayout>
                <div className="wholeContainer">
                    <div className="navBar">
                        <button>
                            <a href={`/nikeXoff/new`}>New Off-White's</a>
                        </button>
                        <button>
                            <a href={`/`}>Home Page</a>
                        </button>
                    </div>

                    <div className="list">
                        <ul>
                            {nikeXoff.map((nike, i) => {
                                return (
                                    <>
                                        <li key={i}>
                                            {/* each nike */}
                                            <a href={`/nikeXoff/${nike.id}`}>
                                            Colorway:{` `}{nike.colorWay}
                                            <br />
                                            Price:{` `}{nike.price}</a>
                                            <br />
                                            {/* Edit */}
                                            <>
                                                <a href={`/nikeXoff/${nike._id}/edit`}>Edit Shoe</a>
                                            </>
                                            {/* Delete */}
                                            <form
                                                action={`/nikeXoff/${nike._id}?_method=DELETE`}
                                                method="POST"
                                            >
                                                <input type="submit" value="DELETE" />
                                            </form>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>

                </div>

            </DefaultLayout>
        )
    }
}

module.exports = nikeXoffIndex