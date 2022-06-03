import { Answers } from '.storybook/theming-wizard/types';

export const darkModeExample = () => `
import darkMode from '@friday-team/core-components/themes/dark';

<>
    {mode === 'dark' && <style>{darkMode}</style>}
    {this.renderPage()}
</>
`;

export const cssImportsExample = (answers: Answers) => {
    const cssImports: string[] = [
        "@import '@friday-team/core-components/vars/index.css';",
        answers.product === 'mobile'
            ? "@import '@friday-team/core-components/vars/colors-bluetint.css';"
            : '',
        answers.product !== 'default'
            ? `@import '@friday-team/core-components/themes/${answers.product}.css';`
            : '',
    ].filter(Boolean);

    return `/* app.css */\n${cssImports.join('\n')}`;
};
