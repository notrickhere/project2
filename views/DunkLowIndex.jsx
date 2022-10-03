const React = require('react')
const DefaultLayout = require('./layouts/Default')
class DunkLowIndex extends React.Component {
    render() {
        const { dunkLow } = this.props
        return (
            <DefaultLayout>
                <div className="wholeContainer">
                    <div className="navBar">
                        <button>
                            <a href={`/dunkLow/new`}>New Dunk Low</a>
                        </button>
                        <button>
                            <a href={`/`}>Home Page</a>
                        </button>
                    </div>

                    <div className="list">
                        <ul>
                            {dunkLow.map((dunk, i) => {
                                return (
                                    <>
                                        <li key={i}>
                                            {/* each dunk */}
                                            <a href={`/dunkLow/${dunk.id}`}>
                                            Colorway:{` `}{dunk.colorWay}
                                            <br />
                                            Price:{` `}{dunk.price}</a>
                                            <br />
                                            {/* Edit */}
                                            <>
                                                <a href={`/dunkLow/${dunk._id}/edit`}>Edit Shoe</a>
                                            </>
                                            {/* Delete */}
                                            <form
                                                action={`/dunkLow/${dunk._id}?_method=DELETE`}
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

module.exports = DunkLowIndex