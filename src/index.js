import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="ui middle aligned celled list">
                <ApprovalCard>
                    <CommentDetail 
                        avatar={faker.image.avatar()}
                        author={faker.name.firstName()}
                        text={faker.lorem.sentence()} 
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail
                        avatar={faker.image.avatar()}
                        author={faker.name.firstName()}
                        text={faker.lorem.sentence()}
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail
                        avatar={faker.image.avatar()}
                        author={faker.name.firstName()}
                        text={faker.lorem.sentence()}
                    />
                </ApprovalCard>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

