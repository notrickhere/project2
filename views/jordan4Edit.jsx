const React = require("react");
const DefaultLayout = require("./layouts/default");

class jordan4Edit extends React.Component {
    render() {
        const {jordan4} = this.props
        return (
            <DefaultLayout title="Edit Page">
                <nav>
                    <a href="/jordan4"> Back To Jordan 4's</a>
                    <br />
                    <a href="/"> Back To Home</a>
                </nav>
                <form
                    action={`/jordan4/${jordan4._id}?_method=PUT`}
                    method="POST" className="wholeContainer editPage"
                >

                    Title:{" "}
                    <input type="text" name="colorWay" defaultValue={jordan4.colorWay} />
                    <br />

                    Entry:{" "}
                    <input type="text" name="price" defaultValue={jordan4.price} />
                    <br />

                    Is Deadstock:
                    {jordan4.isDeadStock ? (
                        <input type="checkbox" name="isDeadStock" defaultChecked />
                    ) : (
                        <input type="checkbox" name="isDeadStock" />
                    )}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        );
    }
}
module.exports = jordan4Edit;