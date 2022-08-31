import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MockThemeProvider } from '../../../theme/MockThemeProvider';
import { myTheme } from '../../../theme/theme';
import { WithQueryWrapper } from '../../../utils/QueryClientWrapper';
import ItemDetails from '../ItemDetails';
test('should render Item Details page', () => {
   render(
      MockThemeProvider({
         children: (
            <WithQueryWrapper>
               <ItemDetails />
            </WithQueryWrapper>
         ),
         theme: myTheme,
      }),
   );

   const analyzeButton = screen.getByText('Analyze');
   const dropzoneInput = screen.getByTestId('dropzone-input');

   expect(analyzeButton).toBeInTheDocument();
   expect(dropzoneInput).toBeInTheDocument();
   expect(dropzoneInput.getAttribute('type')).toEqual('file');
   expect(analyzeButton).toBeDisabled();

   act(() => {
      fireEvent.change(dropzoneInput, { target: { files: [new File(['test'], 'test.txt')] } });
   }).then(() => {
      analyzeButton.getAttribute('disabled')?.length === 0;
   });

   screen.debug();
});
