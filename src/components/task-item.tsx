import React, { useCallback } from 'react'
import {
  NativeSyntheticEvent,
  Pressable,
  TextInputChangeEventData,
  View
} from 'react-native'
import {
  Box,
  HStack,
  useTheme,
  themeTools,
  useColorModeValue,
  Icon,
  Input
} from 'native-base'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import AnimatedTaskLabel from './animated-task-label'
import SwipeView from './swipeable-view'
import { Feather } from '@expo/vector-icons'
import { PanGestureHandlerProps, TextInput } from 'react-native-gesture-handler'

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  isEditing: boolean
  isDone: boolean
  onToggleCheckbox?: () => void
  onPressLabel?: () => void
  onRemove?: () => void
  onChangeSubject?: (subject: string) => void
  onFinishEditing?: () => void
  subject: string
}

const TaskItem = (props: Props) => {
  const {
    isEditing,
    isDone,
    onToggleCheckbox,
    subject,
    onPressLabel,
    onRemove,
    onChangeSubject,
    onFinishEditing,
    simultaneousHandlers
  } = props

  const theme = useTheme()
  const highlightColor = themeTools.getColor(
    theme,
    useColorModeValue('blue.500', 'blue.400')
  )
  const boxStroke = themeTools.getColor(
    theme,
    useColorModeValue('muted.300', 'muted.500')
  )
  const checkmarkColor = themeTools.getColor(
    theme,
    useColorModeValue('white', 'white')
  )
  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue('darkText', 'lightText')
  )
  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue('muted.400', 'muted.600')
  )

  const handleChangeSubject = useCallback(
    (text: string) => {
      onChangeSubject && onChangeSubject(text)
    },
    [onChangeSubject]
  )

  return (
    <SwipeView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box
          w="full"
          h="full"
          bg="red.500"
          alignItems="flex-end"
          justifyContent="center"
          pr={4}
        >
          <Icon color="white" as={<Feather name="trash-2" />} size="sm" />
        </Box>
      }
    >
      <HStack
        alignItems="center"
        w="full"
        px={4}
        py={2}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
      >
        <Box width={30} height={30} mr={2}>
          <Pressable onPress={onToggleCheckbox}>
            <AnimatedCheckbox
              highlightColor={highlightColor}
              checkmarkColor={checkmarkColor}
              boxOutlineColor={boxStroke}
              checked={isDone}
            />
          </Pressable>
        </Box>
        {isEditing ? (
          <Input
            placeholder="Task..."
            value={subject}
            variant="unstyled"
            fontSize={19}
            px={1}
            py={1}
            autoFocus
            blurOnSubmit
            onChangeText={handleChangeSubject}
            multiline={true} // Added multiline property
            numberOfLines={2} // Adjust the number of lines as needed
            textAlignVertical="top" // Align the text at the top of the input
            onBlur={onFinishEditing}
          />
        ) : (
          <AnimatedTaskLabel
            strikethrough={isDone}
            textColor={activeTextColor}
            inactiveTextColor={doneTextColor}
            onPress={onPressLabel}
          >
            {subject}
          </AnimatedTaskLabel>
        )}
      </HStack>
    </SwipeView>
  )
}

export default TaskItem
