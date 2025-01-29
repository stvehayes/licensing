import { useState } from 'react';
import {
  CheckIcon,
  CopilotIcon,
  KebabHorizontalIcon,
  XIcon,
} from '@primer/octicons-react';
import {
  ActionList,
  ActionMenu,
  Box,
  Flash,
  Heading,
  IconButton,
  Octicon,
  Spinner,
  Text,
  ToggleSwitch,
} from '@primer/react';
import { InfoIcon } from '@primer/octicons-react';

export function Copilot() {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const delay = 3000;

  // Create an error during download
  const hasError = false;

  const setLoading = () => {
    setIsError(false);
    setIsActive(true);
    setIsLoading(true);
    setIsComplete(false);
    setTimeout(() => {
      setIsLoading(false);
      setIsError(hasError);
    }, delay);
  };

  return (
    <Box sx={{ fontSize: 1, width: '100%' }}>
      <Box mb={2}>
        <Text
          fontWeight={500}
          mr={1}
        >
          Error:
        </Text>
        <ToggleSwitch onChange={() => setIsError(!isError)} />
      </Box>
      <Box
        sx={{
          alignSelf: 'flex-start',
          border: '1px solid',
          borderColor: 'border.default',
          borderRadius: 2,
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <Box
          sx={{
            bg: 'canvas.subtle',
            borderBottom: '1px solid',
            borderColor: 'border.default',
            display: 'flex',
            gap: 3,
            p: 3,
          }}
        >
          <Box
            sx={{
              p: 2,
              border: '1px solid',
              borderColor: 'border.default',
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
          {/* {isLoading ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Spinner size='small' />
              <Text
                sx={{
                  fontSize: 1,
                  color: 'fg.muted',
                  alignSelf: 'center',
                  width: 'max-content',
                }}
              >
                Generating CSV
              </Text>
            </Box>
          ) : isComplete ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color: 'success.emphasis',
                  mb: '2px',
                }}
              >
                <CheckIcon />
              </Box>
              <Text
                sx={{
                  fontSize: 1,
                  color: 'fg.muted',
                  alignSelf: 'center',
                  width: 'max-content',
                }}
              >
                Downloaded CSV
              </Text>
            </Box>
          ) : isError ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color: 'danger.emphasis',
                  mb: '2px',
                }}
              >
                <XIcon />
              </Box>
              <Text
                sx={{
                  fontSize: 1,
                  color: 'fg.muted',
                  alignSelf: 'center',
                  width: 'max-content',
                }}
              >
                Download failed
              </Text>
            </Box>
          ) : null} */}
          <ActionMenu>
            <ActionMenu.Anchor id='custom-anchor-id'>
              <IconButton
                icon={KebabHorizontalIcon}
                aria-label='Open menu'
                variant='invisible'
                sx={{
                  flexShrink: '0',
                }}
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

        {isActive && (
          <Box
            sx={
              {
                // mb: 3,
              }
            }
          >
            <Flash
              full
              variant={isError ? 'danger' : 'default'}
              sx={{
                display: 'grid',
                gridTemplateColumns: 'min-content 1fr minmax(0, auto)',
                gridTemplateRows: 'min-content',
                gridTemplateAreas: `'visual message actions close'`,
                '@media screen and (max-width: 543.98px)': {
                  gridTemplateColumns: 'min-content 1fr',
                  gridTemplateRows: 'min-content min-content',
                  gridTemplateAreas: `
        'visual message close'
        '.      actions actions'
      `,
                },
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  paddingBlock: 'var(--base-size-8)',
                  alignSelf: 'center',
                  gridArea: 'visual',
                }}
              >
                <Octicon icon={InfoIcon} />
              </Box>
              <Box
                sx={{
                  fontSize: 1,
                  lineHeight: '1.5',
                  padding: '0.375rem var(--base-size-8)',
                  alignSelf: 'center',
                  gridArea: 'message',
                }}
              >
                {isError &&
                  'The CSV could not be generated. Please try again later.'}
                {!isError &&
                  "The CSV is being generated. You will also be emailed when it's ready for download."}
              </Box>

              <Box
                sx={{
                  gridArea: 'close',
                  marginLeft: 'var(--controlStack-medium-gap-condensed)',
                  display: 'flex',
                  gap: 3,
                }}
              >
                {isLoading ? (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Spinner size='small' />
                    <Text
                      sx={{
                        fontSize: 1,
                        color: 'fg.muted',
                        alignSelf: 'center',
                        width: 'max-content',
                      }}
                    >
                      Generating CSV
                    </Text>
                  </Box>
                ) : isComplete ? (
                  // <Box
                  //   sx={{
                  //     display: 'flex',
                  //     alignItems: 'center',
                  //     gap: 1,
                  //   }}
                  // >
                  //   <Button>Download CSV</Button>
                  // </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        color: 'success.emphasis',
                        mb: '2px',
                      }}
                    >
                      <CheckIcon />
                    </Box>
                    <Text
                      sx={{
                        fontSize: 1,
                        color: 'fg.muted',
                        alignSelf: 'center',
                        width: 'max-content',
                      }}
                    >
                      Downloaded CSV
                    </Text>
                  </Box>
                ) : isError ? (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        color: 'danger.emphasis',
                        mb: '2px',
                      }}
                    >
                      <XIcon />
                    </Box>
                    <Text
                      sx={{
                        fontSize: 1,
                        color: 'fg.muted',
                        alignSelf: 'center',
                        width: 'max-content',
                      }}
                    >
                      Download failed
                    </Text>
                  </Box>
                ) : null}
                <IconButton
                  onClick={() => setIsActive(false)}
                  variant='invisible'
                  icon={XIcon}
                  aria-label='Dismiss'
                  sx={{
                    svg: {
                      margin: '0',
                      color: 'fg.muted',
                    },
                  }}
                />
              </Box>
            </Flash>
          </Box>
        )}

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
    </Box>
  );
}
