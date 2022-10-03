const React = require('react')
const DefaultLayout = require('./layouts/Default')
class jordan4Index extends React.Component {
    render() {
        const { jordan4 } = this.props
        return (
            <DefaultLayout>
                <div className="wholeContainer">
                    <div className="navBar">
                        <button>
                            <a href={`/jordan4/new`}>New Jordan 4</a>
                        </button>
                        <button>
                            <a href={`/`}>Home Page</a>
                        </button>
                    </div>

                    <div className="list">
                        <ul>
                            {jordan4.map((jordan, i) => {
                                return (
                                    <>
                                        <li key={i}>
                                            {/* each jordan */}
                                            <a href={`/jordan4/${jordan.id}`}>
                                            Colorway:{` `}{jordan.colorWay}
                                            <br />
                                            Price:{` `}{jordan.price}</a>
                                            <br />
                                            {/* Edit */}
                                            <>
                                                <a href={`/jordan4/${jordan._id}/edit`}>Edit Shoe</a>
                                            </>
                                            {/* Delete */}
                                            <form
                                                action={`/jordan4/${jordan._id}?_method=DELETE`}
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

module.exports = jordan4Index