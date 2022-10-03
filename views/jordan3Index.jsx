const React = require('react')
const DefaultLayout = require('./layouts/Default')
class jordan3Index extends React.Component {
    render() {
        const { jordan3 } = this.props
        return (
            <DefaultLayout>
                <div className="wholeContainer">
                    <div className="navBar">
                        <button>
                            <a href={`/jordan3/new`}>New Jordan 3's</a>
                        </button>
                        <button>
                            <a href={`/`}>Home Page</a>
                        </button>
                    </div>

                    <div className="list">
                        <ul>
                            {jordan3.map((jordan, i) => {
                                return (
                                    <>
                                        <li key={i}>
                                            {/* each jordan */}
                                            <a href={`/jordan3/${jordan.id}`}>
                                            Colorway:{` `}{jordan.colorWay}
                                            <br />
                                            Price:{` `}{jordan.price}</a>
                                            <br />
                                            {/* Edit */}
                                            <>
                                                <a href={`/jordan3/${jordan._id}/edit`}>Edit Shoe</a>
                                            </>
                                            {/* Delete */}
                                            <form
                                                action={`/jordan3/${jordan._id}?_method=DELETE`}
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

module.exports = jordan3Index