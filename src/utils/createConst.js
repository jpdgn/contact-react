const createConstant = constant => ({
  request: `${constant}_REQUEST`,
  success: `${constant}_SUCCESS`,
  failed: `${constant}_FAILED`,
})

export default createConstant