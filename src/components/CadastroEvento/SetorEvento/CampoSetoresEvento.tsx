import { Checkbox, CheckboxGroup, useCheckboxGroup, useCheckbox } from '@chakra-ui/checkbox'
import { Stack } from '@chakra-ui/layout'

export default function CampoSetoresEvento(props: any){
    return(
        <div className="flex flex-col gap-4">
            <CheckboxGroup colorScheme='green'>
                <Checkbox value='vip'>VIP</Checkbox>
                <Checkbox value='backstage'>Backstage</Checkbox>
                <Checkbox value='camarote'>Camarote</Checkbox>
            </CheckboxGroup>
        </div>
    )
}

/*function Example() {
    function CustomCheckbox(props) {
      const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
        useCheckbox(props)
  
      return (
        <chakra.label
          display='flex'
          flexDirection='row'
          alignItems='center'
          gridColumnGap={2}
          maxW='40'
          //bg='green.50'
          //border='1px solid'
          //borderColor='green.500'
          //rounded='lg'
          px={3}
          py={1}
          cursor='pointer'
          {...htmlProps}
        >
          <input {...getInputProps()} hidden />
          <Flex
            alignItems='center'
            justifyContent='center'
            border='2px solid'
            borderColor='green.500'
            w={4}
            h={4}
            {...getCheckboxProps()}
          >
            {state.isChecked && <Box w={2} h={2} bg='green.500' />}
          </Flex>
          <Text color="gray.700" {...getLabelProps()}>{props.value}</Text>
        </chakra.label>
      )
    }
  
    const { value, getCheckboxProps } = useCheckboxGroup({
      defaultValue: [''],
    })
  
    return (
      <Stack>
        <Text>The selected checkboxes are: {value.sort().join(',')}</Text>
        <CustomCheckbox {...getCheckboxProps({ value: 'VIP' })} />
        <CustomCheckbox {...getCheckboxProps({ value: 'Backstage' })} />
        <CustomCheckbox {...getCheckboxProps({ value: 'Camarote' })} />
      </Stack>
    )
  }*/