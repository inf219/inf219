import { render, screen } from '@testing-library/react';
import { Conversation } from '../conversation';

// Mock the useConversation hook
jest.mock('@elevenlabs/react', () => ({
    useConversation: jest.fn().mockReturnValue({
        status: 'disconnected',
        isSpeaking: false,
        startSession: jest.fn(),
        endSession: jest.fn(),
    }),
    }));

    // Mock navigator.mediaDevices.getUserMedia
    const mockGetUserMedia = jest.fn();
    Object.defineProperty(global.navigator, 'mediaDevices', {
    value: { getUserMedia: mockGetUserMedia },
    writable: true,
    });

    describe('Conversation Component', () => {
    it('renders the component with disconnected status', () => {
        render(<Conversation />);
        expect(screen.getByText('Status: Ikke koblet til')).toBeInTheDocument();
    });
});