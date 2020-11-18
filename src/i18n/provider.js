import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import { LOCALES } from './locales';
import translations from './translations';

const Provider = ({children, locale=LOCALES.ENGLISH}) => (
    <IntlProvider
        locale={locale}
        textComponent={Fragment}
        messages={translations[locale]}
    >
        {children}
    </IntlProvider>
)

export default Provider;