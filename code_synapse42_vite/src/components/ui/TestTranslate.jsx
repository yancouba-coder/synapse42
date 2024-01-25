import { useTranslation } from 'react-i18next'
import useTranslate from '@/services/translation-service/useTanslate'
import { Button } from './button'

function TestTranslate() {
    
   
    return (
        <div>
            <p>{useTranslate()("header.message")}</p>
                <Button>Hello Shadcn</Button>
            <p>{useTranslate()("home.body")}</p>
            <p>cc</p>
        </div>
    )
}


export default TestTranslate