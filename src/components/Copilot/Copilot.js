import { useState } from 'react';
import { CopilotIcon, KebabHorizontalIcon } from '@primer/octicons-react';
import {
  ActionList,
  ActionMenu,
  Box,
  Heading,
  IconButton,
  Spinner,
  Text,
} from '@primer/react';

export function Copilot() {
  const [isLoading, setIsLoading] = useState(false);
  const delay = 5000;

  const setLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  };

  return (
    <Box
      sx={{
        width: '100%',
        border: '1px solid',
        borderColor: 'border.default',
        borderRadius: 2,
        overflow: 'hidden',
        alignSelf: 'flex-start',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          p: 3,
          borderBottom: '1px solid',
          borderColor: 'border.default',
          bg: 'canvas.subtle',
        }}
      >
        <Box
          sx={{
            p: 2,
            border: '1px solid',
            borderColor: 'border.default',
            display: 'inline',
            borderRadius: 2,
            height: 32,
            width: 32,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bg: 'canvas.default',
          }}
        >
          <CopilotIcon />
        </Box>
        <Heading
          as='h2'
          sx={{
            fontSize: 3,
            fontWeight: 400,
            width: '100%',
          }}
        >
          Copilot
        </Heading>

        <ActionMenu>
          <ActionMenu.Anchor id='custom-anchor-id'>
            <IconButton
              icon={KebabHorizontalIcon}
              aria-label='Open menu'
              variant='invisible'
            />
          </ActionMenu.Anchor>
          <ActionMenu.Overlay width='small'>
            <ActionList>
              <ActionList.Item>Manage policies</ActionList.Item>
              <ActionList.Item
                onSelect={() => {
                  console.log('Download CSV report');
                  setLoading();
                }}
                disabled={isLoading}
              >
                {isLoading && (
                  <ActionList.LeadingVisual>
                    <Spinner size='small' />
                  </ActionList.LeadingVisual>
                )}
                Download CSV report
              </ActionList.Item>

              <ActionList.Divider />
              <ActionList.Item variant='danger'>
                Disable GitHub Copilot
              </ActionList.Item>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      </Box>

      <Box
        sx={{
          p: 3,
        }}
      >
        <Box>
          <Text
            sx={{
              fontSize: 1,
              color: 'fg.muted',
            }}
          >
            Content here
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
