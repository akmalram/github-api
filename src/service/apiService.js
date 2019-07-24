class Service {
    getData = async  (url) => {
        return await fetch(url)
                        .then(res => res.json())
                        .then(user => this._transformData(user));
    }

    _transformData = (user) => {
        if(user.name) {
            const {name, location, email, bio, html_url, avatar_url} = user;

            const oldObj = {
                avatar_url,
                name,
                location,
                email, 
                bio,
                html_url,
            }

            let newObj = {}

            for (const el in oldObj) {
                const value = oldObj[el];
                if(value != null) {
                    newObj[el] = value.trim();       
                } else {
                    newObj[el] = 'Unknown:)';
                }
            }

            return {
                success: true,
                field: false,
                data: newObj,
            }
        } else {
            return {
                success: false,
                field: true,
                msg: `There isn't such kind of user!`
            }
        }
    }
}

export default Service;