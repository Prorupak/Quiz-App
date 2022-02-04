import React from 'react';
import { Outlet } from 'react-router';
import Layout from '../../layout/Layout';
import { Form, Wrapper } from './Styles.Content'
import { IQuiz } from '../../types/quizTypes'
import axios from 'axios';
const QuizPlay = () => {
    const [quiz, setQuiz] = React.useState<IQuiz[]>([])
    const [Loading, setLoading] = React.useState(false)
    const getQuiz = async () => {
        try {
            setLoading(true)
            const res = await axios.get('http://localhost:4000/javascriptQns');
            setQuiz(res.data)
            console.log('data', res.data);

        }
        catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getQuiz()
    }, [])

    return (
        <Layout >
            <Wrapper>
                <Form>
                    <header className="text-1xs font-bold">Coding Quiz Challenge</header>
                </Form>
            </Wrapper>
        </Layout>
    )
};

export default QuizPlay;
