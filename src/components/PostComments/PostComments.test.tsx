import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar 2 comentários no Post', () => {
        render(<PostComment />);
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Muito Legal!!!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Que Show, também quero!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))


        expect(screen.getByText('Muito Legal!!!')).toBeInTheDocument();
        expect(screen.getByText('Que Show, também quero!')).toBeInTheDocument();
    })
})

// describe('Teste para o componente PostComment', () => {
// });