export default (event: any) => {
    event.on('apply', (data: any) => {
        console.log('Evento', data);
    })
}

