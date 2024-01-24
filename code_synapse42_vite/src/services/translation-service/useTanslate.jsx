
import { useTranslation } from 'react-i18next'

function useTranslate() {
    const [translate, i18n] = useTranslation("global");
    return translate;
}

export default useTranslate;